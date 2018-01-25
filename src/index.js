import SVG from 'svg.js'

import { SIZE_UNIT } from './constants'
import data from './data'
import buildElement from './elements'

const mapData = data.map(p => ({
  ...p,
  x: p.x * SIZE_UNIT,
  y: p.y * SIZE_UNIT,
}))

const buildMap = () => {
  const group = SVG('map').group()

  const linePoints = []

  mapData.forEach((element, index, arr) => {
    const { type, x, y } = element
    const previous = arr[index - 1]
    const next = arr[index + 1]

    buildElement(group, element)

    if (!previous) {
      linePoints.push(`M${x} ${y}`)
    } else if (type === 'corner' && next) {
      linePoints.push(`Q${x} ${y} ${next.x} ${next.y}`)
    } else {
      linePoints.push(`L${x} ${y}`)
    }
  })

  group.path(linePoints.join(' ')).fill('none').stroke({ width: SIZE_UNIT })
}

buildMap()
