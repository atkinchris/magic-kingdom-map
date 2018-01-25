import { SIZE_UNIT } from '../constants'

const DIAMETER = SIZE_UNIT * 3

const buildStation = (group, { x, y, orientation = 'vertical', label }) => {
  const station = group.circle(DIAMETER).move(x, y)

  station.fill('white')
  station.stroke({ color: 'black', width: SIZE_UNIT * 0.8 })

  if (orientation === 'horizontal') {
    station.dmove(-SIZE_UNIT * 2, -SIZE_UNIT * 1.5)
  } else {
    station.dmove(-SIZE_UNIT * 1.5, -SIZE_UNIT * 1.5)
  }

  if (label && label.text) {
    const { text, alignment = 'above' } = label
    const labelElement = group.text(text).move(x, y)
    const length = Math.ceil(labelElement.length())

    switch (alignment) {
      case 'right':
        labelElement.dmove(SIZE_UNIT * 2.5, -SIZE_UNIT * 2)
        break
      case 'left':
        labelElement.dmove(-(SIZE_UNIT * 2.5) - length, -SIZE_UNIT * 2)
        break
      case 'below':
        labelElement.dmove(-length / 2, DIAMETER / 1.5)
        break
      case 'above':
        labelElement.dmove(-length / 2, -DIAMETER * 2)
        break
      default:
        break
    }
  }

  return station
}

export default buildStation
