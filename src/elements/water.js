import { SIZE_UNIT } from '../constants'

const RADIUS = 2 * SIZE_UNIT

const buildWater = (map, { shapes }) => {
  const group = map.group()
  const water = group.rect(10000, 10000).fill('#c6ebfc').center(0, 0)
  const mask = group.mask().fill('grey').stroke({ width: SIZE_UNIT / 2, color: 'white' })

  shapes.forEach(({ points: rawPoints, subtract }) => {
    const points = rawPoints.map(([x, y]) => [x * SIZE_UNIT, y * SIZE_UNIT])
    const path = points.reduce((out, [x, y], index, arr) => {
      const [pX, pY] = arr[index - 1] || arr[arr.length - 1]
      const [nX, nY] = arr[index + 1] || arr[0]

      if (index === 0) {
        out.push(`M${x + RADIUS} ${y}`)
      }

      if (pX < x) {
        out.push(`L${x - RADIUS} ${y}`)
      }

      if (pX > x) {
        out.push(`L${x + RADIUS} ${y}`)
      }

      if (pY < y) {
        out.push(`L${x} ${y - RADIUS}`)
      }

      if (pY > y) {
        out.push(`L${x} ${y + RADIUS}`)
      }

      if (nY > y) {
        out.push(`L${x} ${y + RADIUS}`)
      }

      if (nY < y) {
        out.push(`L${x} ${y - RADIUS}`)
      }

      if (nX > x) {
        out.push(`L${x + RADIUS} ${y}`)
      }

      if (nX < x) {
        out.push(`L${x - RADIUS} ${y}`)
      }

      if (index === arr.length - 1) {
        out.push(`L${x + RADIUS} ${y}`)
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
