import { saveSvgAsPng } from 'save-svg-as-png'

const buildSaveButton = (svg) => {
  const options = {
    backgroundColor: 'white',
    scale: 4,
  }
  const onClick = () => saveSvgAsPng(svg.node, 'map.png', options)

  document.getElementById('save-button').onclick = onClick
}

export default buildSaveButton
