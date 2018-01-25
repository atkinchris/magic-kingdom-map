export default [{
  type: 'station',
  x: 10,
  y: 10,
  label: {
    text: 'Castle',
    alignment: 'left',
  },
}, {
  type: 'stop',
  x: 10,
  y: 15,
  orientation: 'left',
  label: {
    text: 'Dog',
    alignment: 'left',
  },
}, {
  type: 'stop',
  x: 10,
  y: 20,
  label: {
    text: 'Cat',
    alignment: 'right',
  },
}, {
  type: 'point',
  x: 10,
  y: 25,
}, {
  type: 'corner',
  x: 10,
  y: 30,
}, {
  type: 'stop',
  x: 15,
  y: 30,
  orientation: 'up',
  label: {
    text: 'Owl',
    alignment: 'above',
  },
}, {
  type: 'station',
  x: 20,
  y: 30,
  orientation: 'horizontal',
  label: {
    text: 'Hotel',
    alignment: 'above',
  },
}, {
  type: 'stop',
  x: 25,
  y: 30,
  orientation: 'down',
  label: {
    text: 'Rabbit',
    alignment: 'below',
  },
}, {
  type: 'endcap',
  x: 30,
  y: 30,
  orientation: 'vertical',
  label: 'Output',
}]
