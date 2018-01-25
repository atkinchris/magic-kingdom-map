import SVG from 'svg.js'

import data from './data'
import { buildLine } from './elements'

const map = SVG('map').group()

buildLine(map, data)
