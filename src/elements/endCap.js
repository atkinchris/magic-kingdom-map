import { SIZE_UNIT, FONT } from '../constants'

const buildEndCap = (group, point, color) => {
  const { x, y, orientation = 'horizontal', label } = point
  const endCap = group.rect(SIZE_UNIT * 3, SIZE_UNIT)

  endCap.fill(color)
  endCap.center(x, y)

  if (orientation === 'vertical') {
    endCap.rotate(90)
  }

  if (label && label.text) {
    const { text, alignment } = label
    const labelElement = group.text(text).move(x, y).font(FONT)
    const leading = labelElement.leading().value
    const lines = labelElement.lines().length()
    const height = (leading * lines) + (leading / 2)

    switch (alignment) {
      case 'right':
        labelElement.font({ anchor: 'start' })
        labelElement.dx(SIZE_UNIT * 1.5)
        labelElement.dy(-SIZE_UNIT * height)
        if (orientation === 'horizontal') labelElement.dx(SIZE_UNIT)
        break
      case 'left':
        labelElement.font({ anchor: 'end' })
        labelElement.dx(-SIZE_UNIT * 1.5)
        labelElement.dy(-SIZE_UNIT * height)
        if (orientation === 'horizontal') labelElement.dx(-SIZE_UNIT)
        break
      case 'below':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(SIZE_UNIT * 2)
        break
      case 'above':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(-SIZE_UNIT * 5)
        labelElement.dy(-height * SIZE_UNIT)
        break
      default:
        break
    }
  }

  return endCap
}

export default buildEndCap
