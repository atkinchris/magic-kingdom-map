import { SIZE_UNIT, PADDING } from '../constants'
import buildLabel from './label'

const DIAMETER = SIZE_UNIT * 3

const buildStation = (map, point) => {
  const { x, y, label } = point
  const element = map.circle(DIAMETER).center(x, y)

  element.fill('white')
  element.stroke({ color: 'black', width: SIZE_UNIT * 0.8 })
  element.front()

  buildLabel(map, element, label, PADDING * 2)

  return element
}

export default buildStation
