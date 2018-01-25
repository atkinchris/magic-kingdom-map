const SIZE_UNIT = 8
const mapData = [
  { type: 'station', x: 100, y: 100 },
  { type: 'station', x: 100, y: 150, orientation: 'left' },
  { type: 'station', x: 100, y: 200 },
  { x: 100, y: 250 },
  { type: 'station', x: 150, y: 250, orientation: 'up' },
  { type: 'station', x: 200, y: 250, orientation: 'down' },
]

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

  const linePoints = []

  mapData.forEach(({ type, x, y, orientation }) => {
    if (type === 'station') {
      buildStation(map, x, y, orientation)
    }

    linePoints.push([x, y])
  })

  map.polyline(linePoints).fill('none').stroke({ width: SIZE_UNIT })
}

window.buildMap = buildMap
