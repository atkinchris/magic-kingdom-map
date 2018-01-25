import buildStop from './stop'
import buildEndCap from './endCap'
import buildStation from './station'
import buildLine from './line'

const buildElement = (group, element, color) => {
  const { type } = element

  switch (type) {
    case 'stop':
      return buildStop(group, element, color)
    case 'endcap':
      return buildEndCap(group, element, color)
    case 'station':
      return buildStation(group, element, color)
    default:
      return null
  }
}

export default buildElement
export {
  buildStop,
  buildEndCap,
  buildStation,
  buildLine,
}
