import { SIZE_UNIT, MARGINS, FONT } from '../constants'

const GRID_SIZE = SIZE_UNIT * 24

const buildGrid = (map) => {
  const { x, y, width, height } = map.bbox()
  const { horizontal, vertical } = MARGINS

  const absWidth = width + (horizontal * 2)
  const absHeight = height + (vertical * 2)
  const absX = x - horizontal
  const absY = y - vertical

  const grid = map.group().move(absX, absY).back()
  const columns = Math.ceil(absWidth / GRID_SIZE)
  const rows = Math.ceil(absHeight / GRID_SIZE)
  const stroke = {
    width: 1,
    color: '#c6ebfc',
  }

  for (let i = 0; i <= columns; i += 1) {
    const position = i * GRID_SIZE
    const start = 0
    const end = rows * GRID_SIZE
    grid.line(position, start, position, end).stroke(stroke).back()

    if (i !== 0) {
      grid
        .rect(FONT.size * 1, FONT.size * 1.5)
        .fill('white')
        .center(position - (GRID_SIZE / 2), 0)
      grid
        .text(String(i))
        .font(FONT)
        .font('weight', 700)
        .fill('#c6ebfc')
        .center(position - (GRID_SIZE / 2), 0)
    }
  }

  for (let i = 0; i <= rows; i += 1) {
    const position = i * GRID_SIZE
    const start = 0
    const end = columns * GRID_SIZE
    grid.line(start, position, end, position).stroke(stroke).back()

    if (i !== 0) {
      grid
        .rect(FONT.size * 1, FONT.size * 1.5)
        .fill('white')
        .center(0, position - (GRID_SIZE / 2))
      grid
        .text(String.fromCharCode(64 + i))
        .font(FONT)
        .font('weight', 700)
        .fill('#c6ebfc')
        .center(0, position - (GRID_SIZE / 2))
    }
  }

  grid.dx(-(grid.bbox().width - absWidth) / 2)
  grid.dy(-(grid.bbox().height - absHeight) / 2)
}

export default buildGrid
