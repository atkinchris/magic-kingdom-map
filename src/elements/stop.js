import { SIZE_UNIT, FONT, PADDING } from '../constants'

const buildStop = (map, point, color) => {
  const { x, y, orientation = 'right', label } = point

  const element = map.rect(SIZE_UNIT * 2, SIZE_UNIT).center(x, y)
  element.dx(element.bbox().width / 4)
  element.fill(color)

  switch (orientation) {
    case 'right':
      element.rotate(0, x, y)
      break
    case 'left':
      element.rotate(180, x, y)
      break
    case 'up':
      element.rotate(-90, x, y)
      break
    case 'down':
      element.rotate(90, x, y)
      break
    default:
      break
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

export default buildStop
