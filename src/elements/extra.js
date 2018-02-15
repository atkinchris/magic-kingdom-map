import { SIZE_UNIT, FONT } from '../constants'

const buildExtra = (map, extra) => {
  const { x, y, type } = extra
  const mapX = x * SIZE_UNIT
  const mapY = y * SIZE_UNIT
  const group = map.group()

  if (type === 'rail-symbol') {
    group.path('M28 329l-27-2-1-29h37l5-8c5-7-1-14-16-19v-59l39-1 3-26c3 0 4-3 4-8-1-9 1-15 4-20 3-3 3-4 3-14-1-13 0-18 5-26 7-12 19-18 33-18h8l2-5c2-10 9-18 18-23 6-3 20-4 28-1l6 3 5-5 5-5-1-11c-1-17 4-28 15-39 9-9 17-12 29-12 17-1 30 4 41 15 10 11 14 22 14 39v11l4 4 8 12c4 8 4 23 0 30-3 7-9 14-16 18-5 2-7 3-16 3s-11-1-17-4-8-3-8 0-8 12-13 15c-5 2-6 3-15 3s-11-1-18-5c-3-2-3-2-7 0-5 4-11 6-20 5l-8-1-2 5c-5 13-22 18-34 10l-4-3c-1 0-20 24-20 26l7 1 2 25 61 1c3-10 11-15 22-15s19 5 22 15h77l2-25 116 1 1 23h-21l-10 6 4 83 47 2v29l-51 1c-5 19-15 28-31 28s-27-9-33-28h-32c-8 18-19 27-33 27s-25-9-33-27l-30-1c-5 17-16 26-33 26-16 0-27-9-33-26H92c-5 17-16 25-32 25-17 0-28-9-32-26z')

    group.fill('#193f96')
    group.move(mapX, mapY)
    group.scale(0.05)
  }

  if (type === 'station-join') {
    const { orientation } = extra
    group.rect(SIZE_UNIT * 3, SIZE_UNIT * 2.5).dx(SIZE_UNIT)
    group.rect(SIZE_UNIT * 5, SIZE_UNIT).dy(SIZE_UNIT * 0.75).fill('white')

    group.center(mapX, mapY)

    if (orientation === 'vertical') {
      group.rotate(90)
    }
  }

  if (type === 'monorail-symbol') {
    group
      .path('M73.96 34.21H2.83v7.9h45.1s14.32.6 26.03-7.9zM2.83 3.17v29.46H72.5s14.67 1 14.82-5.18c0 0 .21-1.59-.87-3.25 0 0-12.8-16.52-35.49-21.03H2.83zm50.6 5.5s9.66-.94 23.32 10.6c0 0 2.35 2.15-1 2.15H53.43V8.68zm-12.93 0h8.26v12.76H40.5V8.66zm-10.12 0h5.99v21.11h-5.99V8.66zm-6.95 0h6v21.1h-6V8.67zm-17.15 0H18.9v12.76H6.3V8.66z')
    group
      .path('M31.47 10.14h3.83v8.27h-3.83zm-6.95 0h3.83v8.27h-3.83z')

    group.fill('#193f96')
    group.move(mapX, mapY)
    group.scale(0.3)
  }

  if (type === 'gradient') {
    const { from, to, width, height, opacity } = extra
    const gradient = group.gradient('linear', (stop) => {
      stop.at(0, from)
      stop.at(1, to)
    })
    group
      .rect(SIZE_UNIT * width, SIZE_UNIT * height)
      .fill(gradient)
      .opacity(opacity)
    group.move(mapX, mapY)
  }

  if (type === 'label') {
    const { text, anchor = 'middle' } = extra
    group
      .text(text)
      .font(FONT)
      .font({ anchor })
      .center(mapX, mapY)
  }
}

export default buildExtra
