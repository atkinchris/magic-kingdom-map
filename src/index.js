import SVG from 'svg.js'

const SIZE_UNIT = 8
const mapData = [
  { type: 'stop', x: 100, y: 100 },
  { type: 'stop', x: 100, y: 150, orientation: 'left' },
  { type: 'stop', x: 100, y: 200 },
  { type: 'corner', x: 100, y: 250 },
  { type: 'stop', x: 150, y: 250, orientation: 'up' },
  { type: 'stop', x: 200, y: 250, orientation: 'down' },
]

const buildStop = (map, x, y, orientation = 'right') => {
  const stop = map.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x, y)

  switch (orientation) {
    case 'right':
      stop.dx(-SIZE_UNIT / 2)
      break
    case 'left':
      stop.dx(-SIZE_UNIT / 2).rotate(180, x)
      break
    case 'up':
      stop.dy(-SIZE_UNIT / 2).rotate(-90, x, y + (SIZE_UNIT / 2))
      break
    case 'down':
      stop.dy(-SIZE_UNIT / 2).rotate(90, x, y - (SIZE_UNIT / 2))
      break
    default:
      break
  }

  return stop
}

const buildMap = () => {
  const map = SVG('map')

  const linePoints = []

  mapData.forEach(({ type, x, y, orientation }, index, arr) => {
    const previous = arr[index - 1]
    const next = arr[index + 1]

    if (type === 'stop') {
      buildStop(map, x, y, orientation)
    }

    if (!previous) {
      linePoints.push(`M${x} ${y}`)
    } else if (type === 'corner' && next) {
      linePoints.push(`Q${x} ${y} ${next.x} ${next.y}`)
    } else {
      linePoints.push(`L${x} ${y}`)
    }
  })

  map.path(linePoints.join(' ')).fill('none').stroke({ width: SIZE_UNIT })
}

buildMap()
