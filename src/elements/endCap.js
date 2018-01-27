import { SIZE_UNIT } from '../constants'
import buildLabel from './label'

const buildEndCap = (map, point, color) => {
  const { x, y, orientation, label } = point
  const element = map.rect(SIZE_UNIT * 3, SIZE_UNIT)

  element.fill(color)
  element.center(x, y)

  if (orientation === 'vertical') {
    element.rotate(90)
  }

  buildLabel(map, element, label)

  return element
}

export default buildEndCap
