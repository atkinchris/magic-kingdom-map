import { SIZE_UNIT } from '../constants'

const buildStation = (group, { x, y }) => {
  const station = group.circle(SIZE_UNIT * 3).move(x, y)

  station.dmove(-SIZE_UNIT * 2, -SIZE_UNIT * 1.5)
  station.fill('white')
  station.stroke({ color: 'black', width: SIZE_UNIT * 0.8 })

  return station
}

export default buildStation
