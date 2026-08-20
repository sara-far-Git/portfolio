import { readFileSync, writeFileSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const indexPath = new URL('../dist/index.html', import.meta.url)
const template = readFileSync(indexPath, 'utf8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error(`Could not find ${marker} in dist/index.html`)
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${render()}</div>`))
console.log('prerendered dist/index.html')
