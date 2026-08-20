import { readFileSync, writeFileSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const dist = new URL('../dist/', import.meta.url)
const template = readFileSync(new URL('index.html', dist), 'utf8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error(`Could not find ${marker} in dist/index.html`)
}

const scrollScript = `<script>
document.addEventListener('scroll',function(){
  var h=document.querySelector('.hdr');
  if(h) h.setAttribute('data-scrolled', window.scrollY>8 ? 'true' : 'false');
},{passive:true});
</script>`

function page(lang, dir, markup) {
  return template
    .replace('<html lang="he" dir="rtl">', `<html lang="${lang}" dir="${dir}">`)
    .replace(marker, `<div id="root">${markup}</div>`)
    .replace(/<link rel="modulepreload"[^>]*>/g, '')
    .replace(/<script type="module"[^>]*><\/script>/g, '')
    .replace('</body>', `${scrollScript}</body>`)
}

writeFileSync(new URL('index.html', dist), page('he', 'rtl', render('he')))
writeFileSync(new URL('en.html', dist), page('en', 'ltr', render('en')))
console.log('prerendered dist/index.html and dist/en.html (static, no client bundle)')
