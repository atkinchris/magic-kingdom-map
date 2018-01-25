import { SIZE_UNIT } from '../constants'
import buildElement from './'

const buildLine = (group, { points: rawPoints, offset = {}, color }) => {
  const lineGroup = group.group()
  const points = rawPoints.map(p => ({
    ...p,
    x: p.x * SIZE_UNIT,
    y: p.y * SIZE_UNIT,
  }))

  const linePoints = []

  points.forEach((element, index, arr) => {
    const { type, x, y } = element
    const previous = arr[index - 1]
    const next = arr[index + 1]

    buildElement(lineGroup, element, color)

    if (!previous) {
      linePoints.push(`M${x} ${y}`)
    } else if (type === 'corner' && next) {
      linePoints.push(`Q${x} ${y} ${next.x} ${next.y}`)
    } else {
      linePoints.push(`L${x} ${y}`)
    }
  })

  lineGroup
    .path(linePoints.join(' '))
    .fill('none')
    .stroke({ width: SIZE_UNIT, color })
    .back()

  const { x = 0, y = 0 } = offset
  lineGroup.dmove(x * SIZE_UNIT, y * SIZE_UNIT)
}

export default buildLine
