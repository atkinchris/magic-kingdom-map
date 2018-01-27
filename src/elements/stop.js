import { SIZE_UNIT, FONT } from '../constants'

const PADDING = SIZE_UNIT / 2

const buildStop = (map, point, color) => {
  const { x, y, orientation = 'right', label } = point

  const stop = map.rect(SIZE_UNIT * 2, SIZE_UNIT).center(x, y)
  stop.dx(stop.bbox().width / 4)
  stop.fill(color)

  switch (orientation) {
    case 'right':
      stop.rotate(0, x, y)
      break
    case 'left':
      stop.rotate(180, x, y)
      break
    case 'up':
      stop.rotate(-90, x, y)
      break
    case 'down':
      stop.rotate(90, x, y)
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
        labelElement.x(stop.rbox().x2 + PADDING)
        break
      case 'left':
        labelElement.font({ anchor: 'end' })
        labelElement.x(stop.rbox().x - PADDING)
        break
      case 'below':
        labelElement.font({ anchor: 'middle' })
        labelElement.y(stop.rbox().y2 + PADDING)
        labelElement.x(x)
        break
      case 'above':
        labelElement.font({ anchor: 'middle' })
        labelElement.y(stop.rbox().y - labelElement.rbox().height - PADDING)
        labelElement.x(x)
        break
      default:
        break
    }
  }

  return stop
}

export default buildStop
