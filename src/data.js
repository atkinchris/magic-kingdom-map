export default [{
  name: 'Main Street, USA',
  color: '#ee2f25',
  points: [{
    type: 'station',
    x: 30,
    y: 10,
    label: {
      text: 'Cinderella\nCastle',
      alignment: 'above-right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 30,
    orientation: 'left',
    label: {
      text: 'Crystal Palace',
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 40,
    orientation: 'left',
    label: {
      text: 'Casey\'s Corner',
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 45,
    orientation: 'right',
    label: {
      text: 'Main Street Bakery',
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 47,
    orientation: 'left',
    label: {
      text: 'Emporium',
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 49,
    orientation: 'right',
    label: {
      text: 'Town Square Theatre',
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 51,
    orientation: 'left',
    label: {
      text: 'City Hall',
      alignment: 'left',
    },
  }, {
    type: 'station',
    x: 30,
    y: 55,
    label: {
      text: 'WDW\nRailroad',
      alignment: 'below',
    },
  }],
}, {
  name: 'Tomorrowland',
  color: '#1d3f95',
  points: [{
    type: 'point',
    x: 30,
    y: 10,
  }, {
    type: 'point',
    x: 40,
    y: 10,
  }, {
    type: 'corner',
    x: 45,
    y: 10,
  }, {
    type: 'point',
    x: 45,
    y: 15,
  }, {
    type: 'corner',
    x: 45,
    y: 20,
  }, {
    type: 'stop',
    x: 50,
    y: 20,
    orientation: 'down',
    label: {
      text: 'Tomorrowland\nTerrace',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: 63,
    y: 20,
    orientation: 'up',
    label: {
      text: 'Monster\'s Inc\nLaugh Floor',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 70,
    y: 20,
    orientation: 'down',
    label: {
      text: 'Buzz Lightyear\nSpace Ranger Spin',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: 77,
    y: 20,
    orientation: 'up',
    label: {
      text: 'Astro Orbit\nPeople Mover',
      alignment: 'above',
    },
  }, {
    type: 'point',
    x: 80,
    y: 20,
  }, {
    type: 'corner',
    x: 85,
    y: 20,
  }, {
    type: 'point',
    x: 85,
    y: 15,
  }, {
    type: 'stop',
    x: 85,
    y: 5,
    orientation: 'left',
    label: {
      text: 'Carousel of Progress',
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 85,
    y: 0,
    orientation: 'left',
    label: {
      text: 'Space Mountain',
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 85,
    y: -5,
    orientation: 'left',
    label: {
      text: 'Tomorrowland Speedway',
      alignment: 'left',
    },
  }, {
    type: 'endcap',
    x: 85,
    y: -10,
    orientation: 'horizontal',
    label: {
      text: 'Cosmic Starlight Cafe',
      alignment: 'left',
    },
  }],
}, {
  name: 'Liberty Square',
  color: '#029ddd',
  points: [{
    type: 'point',
    x: 30,
    y: 10,
  }, {
    type: 'stop',
    x: 15,
    y: 10,
    orientation: 'up',
    label: {
      text: 'Hall of\nPresidents',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 10,
    y: 10,
    orientation: 'down',
    label: {
      text: 'Christmas\nShoppe',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: 5,
    y: 10,
    orientation: 'up',
    label: {
      text: 'Liberty Tree\nTavern',
      alignment: 'above',
    },
  }, {
    type: 'station',
    x: -5,
    y: 10,
    label: {
      text: 'Liberty Square\nRiverboat',
      alignment: 'left',
    },
  }, {
    type: 'endcap',
    x: -5,
    y: -10,
    label: {
      text: 'Haunted Mansion',
      alignment: 'left',
    },
  }],
}, {
  name: 'Adventureland',
  color: '#00853e',
  offset: {
    y: 1,
    x: 0,
  },
  points: [{
    type: 'point',
    x: 30,
    y: 10,
  }, {
    type: 'stop',
    x: 10,
    y: 10,
    orientation: 'down',
  }, {
    type: 'point',
    x: -5,
    y: 10,
  }, {
    type: 'point',
    x: -5,
    y: 15,
  }, {
    type: 'corner',
    x: -5,
    y: 20,
  }, {
    type: 'point',
    x: -10,
    y: 20,
  }, {
    type: 'stop',
    x: -20,
    y: 20,
    orientation: 'down',
    label: {
      text: 'Country Bear\nJamboree',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: -30,
    y: 20,
    orientation: 'down',
    label: {
      text: 'Pecos\nBill',
      alignment: 'below',
    },
  }, {
    type: 'station',
    x: -40,
    y: 20,
    label: {
      text: 'WDW\nRailroad',
      alignment: 'left',
    },
  }, {
    type: 'point',
    x: -40,
    y: 40,
  }, {
    type: 'corner',
    x: -40,
    y: 45,
  }, {
    type: 'stop',
    x: -35,
    y: 45,
    orientation: 'down',
    label: {
      text: 'Pirates of\nthe Caribbean',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: -30,
    y: 45,
    orientation: 'up',
    label: {
      text: 'Tortuga\nTavern',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: -20,
    y: 45,
    orientation: 'up',
    label: {
      text: 'Enchanted\nTiki Room',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: -18,
    y: 45,
    orientation: 'down',
    label: {
      text: 'Jungle Cruise',
      alignment: 'below',
    },
  }, {
    type: 'point',
    x: -10,
    y: 45,
  }, {
    type: 'corner',
    x: -5,
    y: 45,
  }, {
    type: 'point',
    x: -5,
    y: 40,
  }, {
    type: 'endcap',
    x: -5,
    y: 32,
    label: {
      text: 'Swiss Family Treehouse',
      alignment: 'left',
    },
  }],
}]
