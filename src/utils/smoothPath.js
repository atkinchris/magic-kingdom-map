import { RADIUS } from '../constants'

const smoothPath = (points, radius = RADIUS) => {
  const first = points[0]
  const last = points[points.length - 1]
  const closedPath = (
    first[0] === last[0] &&
    first[1] === last[1] &&
    !first[2] && !first[3]
  )

  return points.reduce((out, [x, y, hard], index, arr) => {
    const [previousX, previousY] = arr[index - 1] || arr[arr.length - 1]
    const [nextX, nextY] = arr[index + 1] || arr[0]

    if (index === 0) {
      if (closedPath && !hard) {
        out.push(`M${x + radius} ${y}`)
      } else {
        out.push(`M${x} ${y}`)
      }

      return out
    }

    if (
      (previousY === y && nextY === y) ||
      (previousX === x && nextX === x) ||
      hard
    ) {
      out.push(`L${x} ${y}`)

      if (!closedPath) {
        return out
      }
    }

    if (!closedPath && index === arr.length - 1) {
      out.push(`L${x} ${y}`)
      return out
    }

    if (previousY === y && nextX === x) {
      if (previousX < x) {
        out.push(`L${x - radius} ${y}`)
      } else if (previousX > x) {
        out.push(`L${x + radius} ${y}`)
      } else {
        out.push(`L${x} ${y}`)
      }

      if (nextY < y) {
        out.push(`Q${x} ${y} ${x} ${y - radius}`)
      } else if (nextY > y) {
        out.push(`Q${x} ${y} ${x} ${y + radius}`)
      }
    }

    if (previousX === x && nextY === y) {
      if (previousY < y) {
        out.push(`L${x} ${y - radius}`)
      } else if (previousY > y) {
        out.push(`L${x} ${y + radius}`)
      } else {
        out.push(`L${x} ${y}`)
      }

      if (nextX < x) {
        out.push(`Q${x} ${y} ${x - radius} ${y}`)
      } else if (nextX > x) {
        out.push(`Q${x} ${y} ${x + radius} ${y}`)
      } else if (closedPath) {
        out.push(`Q${x} ${y} ${x + radius} ${y}`)
      }
    }

    return out
  }, []).join(' ')
}

export default smoothPath
