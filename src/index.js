import SVG from 'svg.js'

import lines from './data'
import { buildLine } from './elements'

const map = SVG('map').group()

lines.reverse().forEach(line => buildLine(map, line))

map.dmove(600, 400)
