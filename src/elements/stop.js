import { SIZE_UNIT } from '../constants'

const buildStop = (group, x, y, orientation = 'right') => {
  const stop = group.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x, y)

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

  return stop
}

export default buildStop
