import { SIZE_UNIT, FONT } from '../constants'

const buildExtra = (map, extra) => {
  const { x, y, type } = extra
  const mapX = x * SIZE_UNIT
  const mapY = y * SIZE_UNIT
  const group = map.group()

  if (type === 'rail-symbol') {
    group.path('M1,-8.9 46,12.4 16,26.6 61,47.9').fill('none').stroke({ width: 6, color: '#ED1C24' })
    group.path('M0,12.4H62m0,14.2H0').fill('none').stroke({ width: 6, color: '#ED1C24' })

    const clip = group.clip().add(group.rect(62, 39))
    group.clipWith(clip)

    group.move(mapX, mapY)
    group.scale(0.4)
  }

  if (type === 'station-join') {
    const { orientation } = extra
    group.rect(SIZE_UNIT * 3, SIZE_UNIT * 2.5).dx(SIZE_UNIT)
    group.rect(SIZE_UNIT * 5, SIZE_UNIT).dy(SIZE_UNIT * 0.75).fill('white')

    group.center(mapX, mapY)

    if (orientation === 'vertical') {
      group.rotate(90)
    }
  }

  if (type === 'label') {
    const { text } = extra
    group
      .text(text)
      .font(FONT)
      .font({ anchor: 'middle' })
      .center(mapX, mapY)
  }
}

export default buildExtra
