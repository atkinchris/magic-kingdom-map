import { SIZE_UNIT, FONT } from '../constants'

const buildLegend = (svg, legend) => {
  const group = svg.group()

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

  group.move(110 * SIZE_UNIT, 105 * SIZE_UNIT)
}

export default buildLegend
