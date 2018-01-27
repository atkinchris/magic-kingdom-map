import { SIZE_UNIT } from '../constants'
import buildElement from './'
import smoothPath from '../utils/smoothPath'

const buildLine = (group, { points: rawPoints, offset = {}, color, dashed }) => {
  const lineGroup = group.group()
  const points = rawPoints.map(p => ({
    ...p,
    x: p.x * SIZE_UNIT,
    y: p.y * SIZE_UNIT,
  }))

  points.forEach(element => buildElement(lineGroup, element, color))

  const pathPoints = points.map(({ x, y, hard }) => [x, y, hard])
  const path = smoothPath(pathPoints, SIZE_UNIT * 3)

  const line = lineGroup
    .path(path)
    .fill('none')
    .stroke({ width: SIZE_UNIT, color })

  if (dashed) {
    line.clone().stroke({ width: SIZE_UNIT / 3, color: 'white' }).back()
    line.stroke({ dasharray: [SIZE_UNIT / 2, SIZE_UNIT / 2] })
  }

  line.back()

  const { x = 0, y = 0 } = offset
  lineGroup.dmove(x * SIZE_UNIT, y * SIZE_UNIT)
}

export default buildLine
