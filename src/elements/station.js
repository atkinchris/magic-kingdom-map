import { SIZE_UNIT } from '../constants'

const DIAMETER = SIZE_UNIT * 3

const buildStation = (group, point) => {
  const { x, y, label } = point
  const station = group.circle(DIAMETER).center(x, y)

  station.fill('white')
  station.stroke({ color: 'black', width: SIZE_UNIT * 0.8 })
  station.front()

  if (label && label.text) {
    const { text, alignment = 'above' } = label
    const labelElement = group.text(text).move(x, y)
    const leading = labelElement.leading().value
    const lines = labelElement.lines().length()
    const height = (leading * lines) + (leading / 2)

    switch (alignment) {
      case 'right':
        labelElement.font({ anchor: 'start' })
        labelElement.dmove(SIZE_UNIT * 2.5, -SIZE_UNIT * 2)
        break
      case 'left':
        labelElement.font({ anchor: 'end' })
        labelElement.dy(-SIZE_UNIT * height)
        labelElement.dx(-DIAMETER)
        break
      case 'below':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(height + (SIZE_UNIT * 2))
        break
      case 'above':
        labelElement.font({ anchor: 'middle' })
        labelElement.dy(-(height + ((DIAMETER + SIZE_UNIT) * 2)))
        break
      default:
        break
    }
  }

  return station
}

export default buildStation
