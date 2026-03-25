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
    if (!s.text && !s.src) continue;
    if (s.src) imgs.add(s.src);
    if (s.text) {
      const re = /src=['"]([^'"]+)['"]/g;
      let m2;
      while ((m2 = re.exec(s.text)) !== null) imgs.add(m2[1]);
    }
  }
  return [...imgs];
}

function renderSections(sections) {
  let md = '';
  for (const s of (sections || [])) {
    if (s.type === 'h2') md += `## ${stripHtml(s.text)}\n\n`;
    else if (s.type === 'img') md += `![${s.alt || ''}](${path.basename(s.src)})\n\n`;
    else md += stripHtml(s.text) + '\n\n';
  }
  return md;
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

  // English MD
  let enMd = '---\n';
  enMd += `id: ${a.id}\n`;
  enMd += `slug: ${a.slug}\n`;
  enMd += `category: ${a.category}\n`;
  enMd += `title: "${a.title}"\n`;
  enMd += `date: "${a.date}"\n`;
  if (coverFile) enMd += `cover: ${coverFile}\n`;
  enMd += `featured: ${!!a.featured}\n`;
  enMd += '---\n\n';
  enMd += `# ${a.title}\n\n`;
  if (a.desc) enMd += `> ${a.desc}\n\n`;
  enMd += renderSections(a.sections);
  fs.writeFileSync(path.join(folderPath, `${a.slug}.md`), enMd, 'utf-8');

  // Chinese MD
  let zhMd = '---\n';
  zhMd += `id: ${a.id}\n`;
  zhMd += `slug: ${a.slug}\n`;
  zhMd += `category: ${a.category}\n`;
  zhMd += `title: "${a.title_zh}"\n`;
  zhMd += `date: "${a.date_zh}"\n`;
  if (coverFile) zhMd += `cover: ${coverFile}\n`;
  zhMd += `featured: ${!!a.featured}\n`;
  zhMd += '---\n\n';
  zhMd += `# ${a.title_zh}\n\n`;
  if (a.desc_zh) zhMd += `> ${a.desc_zh}\n\n`;
  zhMd += renderSections(a.sections_zh);
  fs.writeFileSync(path.join(folderPath, `${a.slug}.zh.md`), zhMd, 'utf-8');

  console.log(`✓ ${folderName}/`);
  console.log(`    ${a.slug}.md`);
  console.log(`    ${a.slug}.zh.md`);
  console.log(`    ${images.length} images`);
});

console.log(`\nDone. ${articles.length} articles × 2 languages = ${articles.length * 2} MD files`);
