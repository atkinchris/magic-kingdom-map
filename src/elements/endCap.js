import { SIZE_UNIT } from '../constants'

const buildEndCap = (group, { x, y, orientation = 'horizontal' }) => {
  const endCap = group.rect(SIZE_UNIT * 3, SIZE_UNIT)

  endCap.move(x - (SIZE_UNIT * 1.5), y - (SIZE_UNIT / 2))

  if (orientation === 'vertical') {
    endCap.rotate(90)
  }

  return endCap
}

export default buildEndCap
