import { FONT, PADDING } from '../constants'

const buildLabel = (map, element, label, padding = PADDING) => {
  if (!(label && label.text)) return null

  const { cx: x, cy: y } = element.rbox()
  const { text, alignment } = label
  const labelElement = map.text(text).font(FONT).center(x, y)

  const alignments = alignment.split(',')

  if (alignments.includes('below')) {
    labelElement.font({ anchor: 'middle' })
    labelElement.y(element.rbox().y2 + padding)
    labelElement.x(x)
  }

  if (alignments.includes('above')) {
    labelElement.font({ anchor: 'middle' })
    labelElement.y(element.rbox().y - labelElement.rbox().height - padding)
    labelElement.x(x)
  }

  if (alignments.includes('right')) {
    labelElement.font({ anchor: 'start' })
    labelElement.x(element.rbox().x2 + padding)
  }

  if (alignments.includes('left')) {
    labelElement.font({ anchor: 'end' })
    labelElement.x(element.rbox().x - padding)
  }

  return labelElement
}

export default buildLabel
