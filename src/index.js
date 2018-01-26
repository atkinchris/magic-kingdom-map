import SVG from 'svg.js'

import { lines, water, extras } from './data'
import { buildLine, buildWater, buildExtra, buildLegend, buildSaveButton } from './elements'
import { SIZE_UNIT } from './constants';

const svg = SVG('map')
const map = svg.group()
const legend = lines.filter(line => line.name).map(({ name, color }) => ({ name, color }))

water.forEach(w => buildWater(map, w))
lines.reverse().forEach(line => buildLine(map, line))
extras.forEach(extra => buildExtra(map, extra))

const { x, y, width, height } = map.bbox()
map.dmove(-x + SIZE_UNIT, -y + (SIZE_UNIT * 2))
svg.size(width + SIZE_UNIT, height + (SIZE_UNIT * 4))

buildLegend(svg, legend, { x: width, y: height })
buildSaveButton(svg)
