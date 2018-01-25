import buildStop from './stop'
import buildEndCap from './endCap'

const buildElement = (group, { type, x, y, orientation }) => {
  switch (type) {
    case 'stop':
      return buildStop(group, x, y, orientation)
    case 'endcap':
      return buildEndCap(group, x, y, orientation)
    default:
      return null
  }
}

export default buildElement
