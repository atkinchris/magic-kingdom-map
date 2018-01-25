import { SIZE_UNIT } from '../constants'

const DIAMETER = SIZE_UNIT * 3

const buildStation = (group, point, color) => {
  const { x, y, orientation = 'vertical', label } = point
  const station = group.circle(DIAMETER).move(x, y)

  station.fill('white')
  station.stroke({ color, width: SIZE_UNIT * 0.8 })

  if (orientation === 'horizontal') {
    station.dmove(-SIZE_UNIT * 2, -SIZE_UNIT * 1.5)
  } else {
    station.dmove(-SIZE_UNIT * 1.5, -SIZE_UNIT * 1.5)
  }

  if (label && label.text) {
    const { text, alignment = 'above' } = label
    const breaks = text.split('\n').length - 1
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
        labelElement.font({ anchor: 'middle' })
        break
      case 'above':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(-DIAMETER * 2)
        labelElement.dy(breaks * -SIZE_UNIT * 3)
        break
      default:
        break
    }
  }

  return station
}

export default buildStation
