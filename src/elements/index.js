import buildStop from './stop'
import buildEndCap from './endCap'
import buildStation from './station'

const buildElement = (group, element) => {
  const { type } = element

  switch (type) {
    case 'stop':
      return buildStop(group, element)
    case 'endcap':
      return buildEndCap(group, element)
    case 'station':
      return buildStation(group, element)
    default:
      return null
  }
}

export default buildElement
