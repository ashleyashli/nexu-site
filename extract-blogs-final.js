const fs = require('fs');
const path = require('path');
const vm = require('vm');

const html = fs.readFileSync(path.join(__dirname, 'site/blog.html'), 'utf-8');
const match = html.match(/window\._blogArticles\s*=\s*(\[[\s\S]*?\]);\s*<\/script>/);
if (!match) { console.error('Could not find articles array'); process.exit(1); }

const sandbox = { result: null };
vm.createContext(sandbox);
vm.runInContext('result = ' + match[1], sandbox);
const articles = sandbox.result;

const outRoot = path.join(__dirname, 'blog');
const imgSrc = path.join(__dirname, 'site/img');

if (fs.existsSync(outRoot)) fs.rmSync(outRoot, { recursive: true });
fs.mkdirSync(outRoot, { recursive: true });

function stripHtml(s) {
  if (!s) return '';
  return s.replace(/<br\s*\/?>/gi, '\n').replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)').replace(/<strong>(.*?)<\/strong>/gi, '**$1**').replace(/<em>(.*?)<\/em>/gi, '*$1*').replace(/<code>(.*?)<\/code>/gi, '`$1`').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

function extractBg(bg) {
  if (!bg) return null;
  const m = bg.match(/url\(([^)]+)\)/);
  return m ? m[1].replace(/['"]/g, '') : null;
}

function collectImages(a) {
  const imgs = new Set();
  const cover = extractBg(a.bg);
  if (cover) imgs.add(cover);
  const allSections = [...(a.sections || []), ...(a.sections_zh || [])];
  for (const s of allSections) {
    if (!s.text) continue;
    const re = /src=['"]([^'"]+)['"]/g;
    let m2;
    while ((m2 = re.exec(s.text)) !== null) imgs.add(m2[1]);
  }
  return [...imgs];
}

articles.forEach((a, i) => {
  const num = String(i + 1).padStart(2, '0');
  const folderName = `${num}-${a.slug}`;
  const folderPath = path.join(outRoot, folderName);
  fs.mkdirSync(folderPath, { recursive: true });

  const images = collectImages(a);
  for (const imgPath of images) {
    const imgFile = path.basename(imgPath);
    const possiblePaths = [
      path.join(imgSrc, imgFile),
      path.join(imgSrc, 'docs', imgFile),
      path.join(__dirname, 'site', imgPath)
    ];
    for (const src of possiblePaths) {
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(folderPath, imgFile));
        break;
      }
    }
  }

  const cover = extractBg(a.bg);
  const coverFile = cover ? path.basename(cover) : null;

  let md = '---\n';
  md += `id: ${a.id}\n`;
  md += `slug: ${a.slug}\n`;
  md += `category: ${a.category}\n`;
  md += `title: "${a.title}"\n`;
  md += `title_zh: "${a.title_zh}"\n`;
  md += `date: "${a.date}"\n`;
  md += `date_zh: "${a.date_zh}"\n`;
  if (coverFile) md += `cover: ${coverFile}\n`;
  md += `featured: ${!!a.featured}\n`;
  md += '---\n\n';

  md += `# ${a.title}\n\n`;
  if (a.desc) md += `> ${a.desc}\n\n`;

  for (const s of (a.sections || [])) {
    if (s.type === 'h2') md += `## ${stripHtml(s.text)}\n\n`;
    else if (s.type === 'img') md += `![](${path.basename(s.src)})\n\n`;
    else md += stripHtml(s.text) + '\n\n';
  }

  md += '---\n\n';
  md += `# ${a.title_zh}\n\n`;
  if (a.desc_zh) md += `> ${a.desc_zh}\n\n`;

  for (const s of (a.sections_zh || [])) {
    if (s.type === 'h2') md += `## ${stripHtml(s.text)}\n\n`;
    else if (s.type === 'img') md += `![](${path.basename(s.src)})\n\n`;
    else md += stripHtml(s.text) + '\n\n';
  }

  const mdPath = path.join(folderPath, `${a.slug}.md`);
  fs.writeFileSync(mdPath, md, 'utf-8');
  console.log(`✓ ${folderName}/ — ${images.length} images`);
});

console.log(`\nDone. ${articles.length} articles in ${outRoot}`);
