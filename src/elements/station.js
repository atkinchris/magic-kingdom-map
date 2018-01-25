import { SIZE_UNIT } from '../constants'

const buildStation = (group, { x, y, orientation = 'vertical' }) => {
  const station = group.circle(SIZE_UNIT * 3).move(x, y)

  station.fill('white')
  station.stroke({ color: 'black', width: SIZE_UNIT * 0.8 })

  if (orientation === 'horizontal') {
    station.dmove(-SIZE_UNIT * 2, -SIZE_UNIT * 1.5)
  } else {
    station.dmove(-SIZE_UNIT * 1.5, -SIZE_UNIT * 1.5)
  }

  return station
}

export default buildStation
