import { SIZE_UNIT } from '../constants'
import buildLabel from './label'

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

  buildLabel(map, element, label)

  return element
}

export default buildStop
