import { SIZE_UNIT } from '../constants'

const DIAMETER = SIZE_UNIT * 3

const buildStation = (group, { x, y, orientation = 'vertical', label: labelText = '' }) => {
  const station = group.circle(DIAMETER).move(x, y)
  const label = group.text(labelText).move(x, y)

  station.fill('white')
  station.stroke({ color: 'black', width: SIZE_UNIT * 0.8 })

  if (orientation === 'horizontal') {
    label.dmove(-DIAMETER, DIAMETER / 2)
    station.dmove(-SIZE_UNIT * 2, -SIZE_UNIT * 1.5)
  } else {
    label.dmove(SIZE_UNIT * 2.5, -SIZE_UNIT * 2)
    station.dmove(-SIZE_UNIT * 1.5, -SIZE_UNIT * 1.5)
  }

  return station
}

export default buildStation
