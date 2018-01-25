const SIZE_UNIT = 8

const buildStation = (map, x, y, orientation = 'right') => {
  const station = map
    .rect(SIZE_UNIT * 2, SIZE_UNIT)
    .move(x - (SIZE_UNIT / 2), y - SIZE_UNIT)

  switch (orientation) {
    case 'right':
      station.dx(0)
      break
    default:
      break
  }

  return station
}

const buildMap = () => {
  const map = SVG('map')

  map.polyline([[100, 100], [100, 150], [100, 200]]).fill('none').stroke({ width: SIZE_UNIT })

  buildStation(map, 100, 100)
  buildStation(map, 100, 150)
  buildStation(map, 100, 200)
}

window.buildMap = buildMap
