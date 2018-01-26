import { SIZE_UNIT, FONT } from '../constants'

const buildLegend = (svg, legend, position) => {
  const group = svg.group()
  const { x, y } = position

  legend.forEach(({ name, color }, index) => {
    const entry = group.group()
    const dy = (index % 3) * SIZE_UNIT * 3
    const dx = Math.floor(index / 3) * SIZE_UNIT * 20
    const length = SIZE_UNIT * 5

    entry
      .line(0, 0, length, 0)
      .stroke({ width: SIZE_UNIT, color })
      .dy(dy)
      .dx(dx)

    entry
      .text(name)
      .font(FONT)
      .dy(dy - (SIZE_UNIT * 2.5))
      .dx(length + SIZE_UNIT)
      .dx(dx)
  })

  const { width, height } = group.bbox()
  group.move(Math.floor(x - width), Math.floor(y - height))
  group.dy(SIZE_UNIT * 4)
  group.dx(-SIZE_UNIT * 8)
}

export default buildLegend
