import SVG from 'svg.js'

import { lines, water } from './data'
import { buildLine, buildWater } from './elements'
import { SIZE_UNIT } from './constants'

const svg = SVG('map')
const map = svg.group()

const allPoints = lines.reduce((out, { points }) => [...out, ...points], [])
const bounds = allPoints.reduce((out, { x, y }) => {
  /* eslint-disable no-param-reassign */
  if (x < out.left) out.left = x
  if (x > out.right) out.right = x
  if (y > out.bottom) out.bottom = y
  if (y < out.top) out.top = y
  /* eslint-enable no-param-reassign */

  return out
}, { left: 0, right: 0, top: 0, bottom: 0 })

water.forEach(w => buildWater(map, w))
lines.reverse().forEach(line => buildLine(map, line))

const width = ((-bounds.left + bounds.right) * SIZE_UNIT) + (SIZE_UNIT * 25)
const height = ((-bounds.top + bounds.bottom) * SIZE_UNIT) + (SIZE_UNIT * 20)

svg.size(width, height)
map.dmove(-bounds.left * SIZE_UNIT, -bounds.top * SIZE_UNIT)
map.dmove(SIZE_UNIT * 12, SIZE_UNIT * 12)
