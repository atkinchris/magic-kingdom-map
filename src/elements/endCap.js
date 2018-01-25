import { SIZE_UNIT } from '../constants'

const buildEndCap = (group, point, color) => {
  const { x, y, orientation = 'horizontal', label: labelText } = point
  const endCap = group.rect(SIZE_UNIT * 3, SIZE_UNIT)
  const label = group.text(labelText)

  endCap.fill(color)
  endCap.move(x - (SIZE_UNIT * 1.5), y - (SIZE_UNIT / 2))
  label.move(x + SIZE_UNIT, y - SIZE_UNIT)

  if (orientation === 'vertical') {
    endCap.rotate(90)
  }

  if (orientation === 'horizontal') {
    label.dx(SIZE_UNIT)
  }

  return endCap
}

export default buildEndCap
