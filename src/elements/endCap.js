import { SIZE_UNIT } from '../constants'

const buildEndCap = (group, x, y, orientation = 'horizontal') => {
  const endCap = group.rect(SIZE_UNIT * 2, SIZE_UNIT).move(x - SIZE_UNIT, y - (SIZE_UNIT / 2))

  if (orientation === 'vertical') {
    endCap.rotate(90)
  }

  return endCap
}

export default buildEndCap
