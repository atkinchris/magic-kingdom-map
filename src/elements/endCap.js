import { SIZE_UNIT } from '../constants'

const buildEndCap = (group, point, color) => {
  const { x, y, orientation = 'horizontal', label } = point
  const endCap = group.rect(SIZE_UNIT * 3, SIZE_UNIT)

  endCap.fill(color)
  endCap.move(x - (SIZE_UNIT * 1.5), y)

  if (orientation === 'vertical') {
    endCap.rotate(90)
  }

  if (label && label.text) {
    const { text, alignment } = label
    const breaks = text.split('\n').length - 1
    const labelElement = group.text(text).move(x, y)
    const length = Math.ceil(labelElement.length())

    switch (alignment) {
      case 'right':
        labelElement.dmove(SIZE_UNIT * 2.5, -SIZE_UNIT * 1.6)
        break
      case 'left':
        labelElement.dmove(-(SIZE_UNIT * 2.5) - length, -SIZE_UNIT * 1.6)
        break
      case 'below':
        labelElement.dmove((-length - SIZE_UNIT) / 2, SIZE_UNIT)
        labelElement.dx(breaks * SIZE_UNIT * 4)
        labelElement.dy(SIZE_UNIT / 2)
        break
      case 'above':
        labelElement.dmove((-length - SIZE_UNIT) / 2, -SIZE_UNIT * 5)
        labelElement.dy(breaks * -SIZE_UNIT * 4)
        labelElement.dx(breaks * SIZE_UNIT * 4)
        break
      default:
        break
    }
  }

  return endCap
}

export default buildEndCap
