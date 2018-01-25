import { SIZE_UNIT } from '../constants'
import buildElement from './'

const buildLine = (group, { points: rawPoints, name }) => {
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

    buildElement(group, element)

    if (!previous) {
      linePoints.push(`M${x} ${y}`)
    } else if (type === 'corner' && next) {
      linePoints.push(`Q${x} ${y} ${next.x} ${next.y}`)
    } else {
      linePoints.push(`L${x} ${y}`)
    }
  })

  group
    .path(linePoints.join(' '))
    .fill('none')
    .stroke({ width: SIZE_UNIT })
    .back()
}

export default buildLine
