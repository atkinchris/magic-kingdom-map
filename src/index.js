import SVG from 'svg.js'

import { lines, water, extras } from './data'
import {
  buildLine,
  buildWater,
  buildExtra,
  buildLegend,
  buildSaveButton,
  buildGrid,
} from './elements'
import { FONT, SIZE_UNIT } from './constants'

const build = () => {
  const svg = SVG('map')
  const map = svg.group()
  const legend = lines.filter(line => line.name).map(({ name, color }) => ({ name, color }))

  water.forEach(w => buildWater(map, w))
  lines.reverse().forEach(line => buildLine(map, line))
  extras.forEach(extra => buildExtra(map, extra))

  buildLegend(map, legend)
  buildGrid(map)

  const { x, y, width, height } = map.bbox()
  const margin = FONT.size * 4
  svg.viewbox({
    x: x - SIZE_UNIT,
    y: y - SIZE_UNIT,
    width: width + (SIZE_UNIT * 2),
    height: height + (SIZE_UNIT * 2),
  })
  svg.size(window.innerWidth - margin, window.innerHeight - margin)

  buildSaveButton(svg)
}

document.fonts.load(`${FONT.size}px ${FONT.family}`).then(build)
