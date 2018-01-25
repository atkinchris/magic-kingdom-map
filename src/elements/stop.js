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
    const labelElement = group.text(text).move(x, y)
    const leading = labelElement.leading().value
    const lines = labelElement.lines().length()
    const height = leading * lines

    switch (alignment) {
      case 'right':
        labelElement.font({ anchor: 'start' })
        labelElement.dmove(SIZE_UNIT * 2.5, -SIZE_UNIT * 1.6)
        break
      case 'left':
        labelElement.font({ anchor: 'end' })
        labelElement.dmove(-SIZE_UNIT * 2.5, -SIZE_UNIT * 1.6)
        break
      case 'below':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(SIZE_UNIT * 2)
        break
      case 'above':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(-SIZE_UNIT * 5)
        labelElement.dy(-height * SIZE_UNIT * 1.5)
        console.log(height)
        break
      default:
        break
    }
  }

  return stop
}

export default buildStop
