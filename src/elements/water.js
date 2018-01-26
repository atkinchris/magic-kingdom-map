import { SIZE_UNIT } from '../constants'

const RADIUS = 2.5 * SIZE_UNIT

const buildWater = (map, rawPoints) => {
  const points = rawPoints.map(([x, y, hard]) => [x * SIZE_UNIT, y * SIZE_UNIT, hard])
  const path = points.reduce((out, [x, y, hard], index, arr) => {
    const [previousX, previousY] = arr[index - 1] || arr[arr.length - 1]
    const [nextX, nextY] = arr[index + 1] || arr[0]

    if (index === 0) {
      out.push(`M${x + RADIUS} ${y}`)
      return out
    }

    if (hard) {
      out.push(`L${x} ${y}`)
      return out
    }

    if (previousY === y && nextX === x) {
      if (previousX < x) {
        out.push(`L${x - RADIUS} ${y}`)
      } else {
        out.push(`L${x + RADIUS} ${y}`)
      }

      if (nextY < y) {
        out.push(`Q${x} ${y} ${x} ${y - RADIUS}`)
      } else {
        out.push(`Q${x} ${y} ${x} ${y + RADIUS}`)
      }
    }

    if (previousX === x && nextY === y) {
      if (previousY < y) {
        out.push(`L${x} ${y - RADIUS}`)
      } else {
        out.push(`L${x} ${y + RADIUS}`)
      }

      if (nextX < x) {
        out.push(`Q${x} ${y} ${x - RADIUS} ${y}`)
      } else {
        out.push(`Q${x} ${y} ${x + RADIUS} ${y}`)
      }
    }

    return out
  }, []).join(' ')

  map
    .path(path)
    .fill('#c6ebfc')
    .opacity(0.5)
}

export default buildWater
