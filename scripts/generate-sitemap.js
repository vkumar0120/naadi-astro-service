import { readdir, writeFile } from 'fs/promises';
import { join, relative, resolve } from 'path';

const SITE_URL = 'https://naadiastroservice.com';
const DIST_DIR = './dist';

async function getAllHtmlFiles(dir, fileList = []) {
  const files = await readdir(dir, { withFileTypes: true });
  const distAbsolutePath = resolve(DIST_DIR);
  
  for (const file of files) {
    const filePath = join(dir, file.name);
    
    if (file.isDirectory()) {
      await getAllHtmlFiles(filePath, fileList);
    } else if (file.name === 'index.html') {
      // Get relative path from dist directory
      const relativePath = relative(distAbsolutePath, resolve(filePath));
      
      // Convert to URL path
      let urlPath = '/' + relativePath
        .replace(/\\/g, '/')
        .replace('/index.html', '')
        .replace('index.html', '');
      
      // Clean up double slashes and trailing slashes
      urlPath = urlPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
      
      fileList.push(urlPath);
    }
  }
  
  return fileList;
}

function generateSitemapXML(urls) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urlEntries = urls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

async function main() {
  try {
    console.log('🔍 Scanning for HTML files...');
    const urls = await getAllHtmlFiles(DIST_DIR);
    urls.sort();
    
    console.log(`✅ Found ${urls.length} pages`);
    
    const sitemapXML = generateSitemapXML(urls);
    const sitemapPath = join(DIST_DIR, 'sitemap.xml');
    
    await writeFile(sitemapPath, sitemapXML, 'utf-8');
    
    console.log(`✅ Sitemap generated at ${sitemapPath}`);
    console.log(`📄 URLs included: ${urls.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
