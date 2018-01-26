import FileSaver from 'file-saver'

const buildSaveButton = (svg) => {
  document.getElementById('save-button').onclick = () => {
    const data = svg.svg()
    const blob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' })

    FileSaver.saveAs(blob, 'magic-kingdom.svg')
  }
}

export default buildSaveButton
