import { SIZE_UNIT, FONT, PADDING } from '../constants'

const buildEndCap = (map, point, color) => {
  const { x, y, orientation = 'horizontal', label } = point
  const element = map.rect(SIZE_UNIT * 3, SIZE_UNIT)

  element.fill(color)
  element.center(x, y)

  if (orientation === 'vertical') {
    element.rotate(90)
  }

  if (label && label.text) {
    const { text, alignment } = label
    const labelElement = map.text(text).font(FONT).center(x, y)

    switch (alignment) {
      case 'right':
        labelElement.font({ anchor: 'start' })
        labelElement.x(element.rbox().x2 + PADDING)
        break
      case 'left':
        labelElement.font({ anchor: 'end' })
        labelElement.x(element.rbox().x - PADDING)
        break
      case 'below':
        labelElement.font({ anchor: 'middle' })
        labelElement.y(element.rbox().y2 + PADDING)
        labelElement.x(x)
        break
      case 'above':
        labelElement.font({ anchor: 'middle' })
        labelElement.y(element.rbox().y - labelElement.rbox().height - PADDING)
        labelElement.x(x)
        break
      default:
        break
    }
  }

  return element
}

export default buildEndCap
