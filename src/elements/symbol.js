import { SIZE_UNIT } from '../constants'

const buildSymbol = (map, { x, y, symbol }) => {
  const mapX = x * SIZE_UNIT
  const mapY = y * SIZE_UNIT
  const group = map.group()

  if (symbol === 'rail') {
    group.path('M1,-8.9 46,12.4 16,26.6 61,47.9').fill('none').stroke({ width: 6, color: '#ED1C24' })
    group.path('M0,12.4H62m0,14.2H0').fill('none').stroke({ width: 6, color: '#ED1C24' })

    const clip = group.clip().add(group.rect(62, 39))
    group.clipWith(clip)

    group.move(mapX, mapY)
    group.scale(0.4)
  }

  // <path d="M1,-8.9 46,12.4 16,26.6 61,47.9" stroke-width="6"/>
  // <path d="M0,12.4H62m0,14.2H0" stroke-width="6.4"/>
}

export default buildSymbol
