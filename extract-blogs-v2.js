const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'site/blog.html'), 'utf-8');
const match = html.match(/window\._blogArticles\s*=\s*(\[[\s\S]*?\]);\s*<\/script>/);
if (!match) { console.error('Could not find articles data'); process.exit(1); }

const articles = eval(match[1]);
const outRoot = '/Users/ashleyli/Desktop/nexu-blog-md-v2';
const imgSrc = path.join(__dirname, 'site/img');

fs.mkdirSync(outRoot, { recursive: true });

function stripHtml(text) {
  if (!text) return '';
  return text.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
             .replace(/<[^>]+>/g, '');
}

function extractBg(bg) {
  if (!bg) return null;
  const m = bg.match(/url\(([^)]+)\)/);
  return m ? m[1] : null;
}

function collectImages(article) {
  const imgs = new Set();
  const cover = extractBg(article.bg);
  if (cover) imgs.add(cover);
  for (const sections of [article.sections, article.sections_zh]) {
    if (!sections) continue;
    for (const s of sections) {
      if (s.type === 'img' && s.src) imgs.add(s.src);
      if (s.text) {
        const matches = s.text.match(/src="([^"]+)"/g);
        if (matches) matches.forEach(m => imgs.add(m.replace(/src="([^"]+)"/, '$1')));
      }
    }
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
    const src = path.join(imgSrc, imgFile);
    const dst = path.join(folderPath, imgFile);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dst);
    }
  }

  const cover = extractBg(a.bg);
  const coverFile = cover ? path.basename(cover) : null;

  let md = '---\n';
  md += `title: "${a.title.replace(/"/g, '\\"')}"\n`;
  md += `title_zh: "${(a.title_zh || '').replace(/"/g, '\\"')}"\n`;
  md += `slug: ${a.slug}\n`;
  md += `category: ${a.category}\n`;
  md += `date: "${a.date}"\n`;
  md += `date_zh: "${a.date_zh || ''}"\n`;
  md += `team: "${a.team}"\n`;
  if (coverFile) md += `cover: ${coverFile}\n`;
  if (a.featured) md += `featured: true\n`;
  md += '---\n\n';

  // English
  md += `# ${a.title}\n\n`;
  md += `> ${a.desc}\n\n`;
  md += `**${a.date}** · ${a.team}\n\n`;
  if (coverFile) md += `![cover](${coverFile})\n\n`;

  for (const s of a.sections) {
    if (s.type === 'h2') {
      md += `## ${stripHtml(s.text)}\n\n`;
    } else if (s.type === 'p') {
      md += `${stripHtml(s.text)}\n\n`;
    } else if (s.type === 'img') {
      const imgFile = path.basename(s.src || '');
      md += `![${s.alt || ''}](${imgFile})\n\n`;
    }
  }

  md += '---\n\n';
  md += `# ${a.title_zh || a.title}\n\n`;
  md += `> ${a.desc_zh || a.desc}\n\n`;
  md += `**${a.date_zh || a.date}** · ${a.team_zh || a.team}\n\n`;
  if (coverFile) md += `![封面](${coverFile})\n\n`;

  const sections_zh = a.sections_zh || a.sections;
  for (const s of sections_zh) {
    if (s.type === 'h2') {
      md += `## ${stripHtml(s.text)}\n\n`;
    } else if (s.type === 'p') {
      md += `${stripHtml(s.text)}\n\n`;
    } else if (s.type === 'img') {
      const imgFile = path.basename(s.src || '');
      md += `![${s.alt || ''}](${imgFile})\n\n`;
    }
  }

  const mdPath = path.join(folderPath, `${a.slug}.md`);
  fs.writeFileSync(mdPath, md, 'utf-8');

  console.log(`✓ ${folderName}/`);
  console.log(`    ${a.slug}.md`);
  images.forEach(img => console.log(`    ${path.basename(img)}`));
  console.log('');
});

console.log(`Done. ${articles.length} article folders created in ${outRoot}`);
