const SIZE_UNIT = 8

const buildStation = (map, x, y, orientation = 'right') => {
  const station = map.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x, y)

  switch (orientation) {
    case 'right':
      station.dx(-SIZE_UNIT / 2)
      break
    case 'left':
      station.dx(-SIZE_UNIT / 2).rotate(180, x)
      break
    case 'up':
      station.dy(-SIZE_UNIT / 2).rotate(-90, x, y + (SIZE_UNIT / 2))
      break
    case 'down':
      station.dy(-SIZE_UNIT / 2).rotate(90, x, y - (SIZE_UNIT / 2))
      break
    default:
      break
  }

  return station
}

const buildMap = () => {
  const map = SVG('map')

  map.polyline([[100, 100], [100, 150], [100, 200], [100, 250], [150, 250], [200, 250]]).fill('none').stroke({ width: SIZE_UNIT }).opacity(0.5)

  buildStation(map, 100, 100)
  buildStation(map, 100, 150, 'left')
  buildStation(map, 100, 200)
  buildStation(map, 150, 250, 'up')
  buildStation(map, 200, 250, 'down')
}

window.buildMap = buildMap
