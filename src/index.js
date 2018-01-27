import SVG from 'svg.js'

import { lines, water, extras } from './data'
import { buildLine, buildWater, buildExtra, buildLegend, buildSaveButton } from './elements'
import { FONT } from './constants'

const build = () => {
  const svg = SVG('map')
  const map = svg.group()
  const legend = lines.filter(line => line.name).map(({ name, color }) => ({ name, color }))

  water.forEach(w => buildWater(map, w))
  lines.reverse().forEach(line => buildLine(map, line))
  extras.forEach(extra => buildExtra(map, extra))
  buildLegend(map, legend)

  svg.viewbox(map.bbox())
  svg.size(window.innerWidth - FONT.size, window.innerHeight - FONT.size)

  buildSaveButton(svg)
}

document.fonts.load(`${FONT.size}px ${FONT.family}`).then(build)
