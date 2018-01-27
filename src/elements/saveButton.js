import { saveAs } from 'file-saver'

const buildSaveButton = (map) => {
  const onClick = () => {
    const svgData = map.svg()
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    saveAs(blob, 'map.svg')
  }

  document.getElementById('save-button').onclick = onClick
}

export default buildSaveButton
