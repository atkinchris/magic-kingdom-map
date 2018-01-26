import { SIZE_UNIT } from '../constants'

const RADIUS = 2.5 * SIZE_UNIT

const buildWater = (map, { shapes }) => {
  const group = map.group()
  const water = group.rect(10000, 10000).fill('#c6ebfc').center(0, 0)
  const mask = group.mask().fill('grey').stroke({ width: SIZE_UNIT / 3, color: 'white' })

  shapes.forEach(({ points: rawPoints, subtract }) => {
    const points = rawPoints.map(([x, y]) => [x * SIZE_UNIT, y * SIZE_UNIT])
    const path = points.reduce((out, [x, y], index, arr) => {
      const [previousX, previousY] = arr[index - 1] || arr[arr.length - 1]
      const [nextX, nextY] = arr[index + 1] || arr[0]

      if (index === 0) {
        out.push(`M${x + RADIUS} ${y}`)
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

    const polygon = group.path(path)

    if (subtract) {
      polygon.fill('black')
    }

    mask.add(polygon)
  })

  water.maskWith(mask)
}

export default buildWater
