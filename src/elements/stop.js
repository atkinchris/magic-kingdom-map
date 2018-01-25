import { SIZE_UNIT } from '../constants'

const buildStop = (group, point, color) => {
  const { x, y, orientation = 'right', label } = point
  const stop = group.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x, y)

  stop.fill(color)

  switch (orientation) {
    case 'right':
      stop.dx(-SIZE_UNIT / 2)
      break
    case 'left':
      stop.dx(-SIZE_UNIT / 2).rotate(180, x)
      break
    case 'up':
      stop.dy(-SIZE_UNIT / 2).rotate(-90, x, y + (SIZE_UNIT / 2))
      break
    case 'down':
      stop.dy(-SIZE_UNIT / 2).rotate(90, x, y - (SIZE_UNIT / 2))
      break
    default:
      break
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

  return stop
}

export default buildStop
