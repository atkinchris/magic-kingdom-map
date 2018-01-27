import SVG from 'svg.js'

import { lines, water, extras } from './data'
import { buildLine, buildWater, buildExtra, buildLegend, buildSaveButton } from './elements'
import { SIZE_UNIT, FONT } from './constants'

const build = () => {
  const svg = SVG('map')
  const map = svg.nested()
  const legend = lines.filter(line => line.name).map(({ name, color }) => ({ name, color }))

  water.forEach(w => buildWater(map, w))
  lines.reverse().forEach(line => buildLine(map, line))
  extras.forEach(extra => buildExtra(map, extra))
  buildLegend(map, legend)

  svg.size(map.rbox().width + (SIZE_UNIT * 2), map.rbox().height + (SIZE_UNIT * 2))
  map.move(-map.rbox().x, -map.rbox().y + SIZE_UNIT)

  buildSaveButton(svg)
}

document.fonts.load(`${FONT.size}px ${FONT.family}`).then(build)
