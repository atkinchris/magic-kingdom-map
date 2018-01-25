import SVG from 'svg.js'

const SIZE_UNIT = 8
const mapData = [
  { type: 'endcap', x: 10, y: 10 },
  { type: 'stop', x: 10, y: 15, orientation: 'left' },
  { type: 'stop', x: 10, y: 20 },
  { type: 'point', x: 10, y: 25 },
  { type: 'corner', x: 10, y: 30 },
  { type: 'stop', x: 15, y: 30, orientation: 'up' },
  { type: 'stop', x: 20, y: 30, orientation: 'down' },
  { type: 'endcap', x: 25, y: 30, orientation: 'vertical' },
].map(p => ({
  ...p,
  x: p.x * SIZE_UNIT,
  y: p.y * SIZE_UNIT,
}))

const buildEndCap = (group, x, y, orientation = 'horizontal') => {
  const endCap = group.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x - SIZE_UNIT, y - (SIZE_UNIT / 2))

  if (orientation === 'vertical') {
    endCap.rotate(90)
  }

  return endCap
}

const buildStop = (group, x, y, orientation = 'right') => {
  const stop = group.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x, y)

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
  const group = SVG('map').group()

  const linePoints = []

  mapData.forEach(({ type, x, y, orientation }, index, arr) => {
    const previous = arr[index - 1]
    const next = arr[index + 1]

    if (type === 'stop') {
      buildStop(group, x, y, orientation)
    }

    if (type === 'endcap') {
      buildEndCap(group, x, y, orientation)
    }

    if (!previous) {
      linePoints.push(`M${x} ${y}`)
    } else if (type === 'corner' && next) {
      linePoints.push(`Q${x} ${y} ${next.x} ${next.y}`)
    } else {
      linePoints.push(`L${x} ${y}`)
    }
  })

  group.path(linePoints.join(' ')).fill('none').stroke({ width: SIZE_UNIT })
}

buildMap()
