export default [{
  name: 'Main Street, USA',
  color: '#f02a0f',
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
    y: 32,
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
      text: "Casey's Corner",
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
  color: '#193f96',
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
      text: 'Astro Orbiter\nPeople Mover',
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
      text: 'Tomorrowland Speedway',
      alignment: 'left',
    },
  }, {
    type: 'endcap',
    x: 85,
    y: -5,
    orientation: 'horizontal',
    label: {
      text: "Cosmic Ray's Starlight Café",
      alignment: 'left',
    },
  }],
}, {
  color: '#1d3f95',
  points: [{
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
    y: 25,
  }, {
    type: 'endcap',
    x: 85,
    y: 32,
    label: {
      text: 'Space Mountain',
      alignment: 'left',
    },
  }],
}, {
  points: [{
    type: 'station',
    x: -5,
    y: 10,
    label: {
      text: 'Liberty Square\nRiverboat',
      alignment: 'left',
    },
  }],
}, {
  name: 'Liberty Square',
  color: '#009edf',
  points: [{
    type: 'point',
    x: 30,
    y: 9.5,
  }, {
    type: 'stop',
    x: 17,
    y: 9.5,
    orientation: 'up',
    label: {
      text: 'Hall of\nPresidents',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 11,
    y: 9.5,
    orientation: 'down',
  }, {
    type: 'stop',
    x: 5,
    y: 9.5,
    orientation: 'up',
    label: {
      text: 'Liberty Tree\nTavern',
      alignment: 'above',
    },
  }, {
    type: 'point',
    x: -5,
    y: 9.5,
  }, {
    type: 'endcap',
    x: -5,
    y: -15,
    label: {
      text: 'Haunted Mansion',
      alignment: 'right',
    },
  }],
}, {
  points: [{
    type: 'station',
    x: -40,
    y: 20,
  }],
}, {
  name: 'Frontierland',
  color: '#b15e00',
  points: [{
    type: 'stop',
    x: -20,
    y: 19.5,
    orientation: 'down',
  }, {
    type: 'stop',
    x: -30,
    y: 19.5,
    orientation: 'down',
  }, {
    type: 'point',
    x: -40,
    y: 19.5,
  }, {
    type: 'stop',
    x: -40,
    y: 15,
    orientation: 'right',
    label: {
      text: 'Splash\nMountain',
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: -40,
    y: 8,
    label: {
      text: 'Tom Sawyer\nRafts',
      alignment: 'right',
    },
  }, {
    type: 'endcap',
    x: -40,
    y: 0,
    label: {
      text: 'Big Thunder\nMountain',
      alignment: 'above',
    },
  }],
}, {
  name: 'Adventureland',
  color: '#00853d',
  offset: {
    y: 1,
    x: 0,
  },
  points: [{
    type: 'point',
    x: 30,
    y: 9.5,
  }, {
    type: 'stop',
    x: 11,
    y: 9.5,
    orientation: 'down',
    label: {
      text: 'Christmas\nShoppe',
      alignment: 'below',
    },
  }, {
    type: 'point',
    x: -5,
    y: 9.5,
  }, {
    type: 'point',
    x: -5,
    y: 15,
  }, {
    type: 'corner',
    x: -5,
    y: 19.5,
  }, {
    type: 'point',
    x: -10,
    y: 19.5,
  }, {
    type: 'stop',
    x: -20,
    y: 19.5,
    orientation: 'down',
    label: {
      text: 'Country Bear\nJamboree',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: -30,
    y: 19.5,
    orientation: 'down',
    label: {
      text: 'Pecos Bill\nTall Tale Inn',
      alignment: 'below',
    },
  }, {
    type: 'point',
    x: -40,
    y: 19.5,
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
    x: -23,
    y: 45,
    orientation: 'down',
    label: {
      text: 'Aloha Isle',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: -16,
    y: 45,
    orientation: 'up',
    label: {
      text: 'Enchanted\nTiki Room',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: -10,
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
}, {
  name: 'Fantasyland',
  color: '#ffd200',
  points: [{
    type: 'point',
    x: 30,
    y: 10,
  }, {
    type: 'station',
    x: 30,
    y: 5,
  }, {
    type: 'stop',
    x: 30,
    y: -5,
    label: {
      text: "Cinderella's Royal Table",
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: -10,
    label: {
      text: 'Prince Charming Regal Carrousel',
      alignment: 'right',
    },
  }, {
    type: 'point',
    x: 30,
    y: -20,
  }, {
    type: 'corner',
    x: 30,
    y: -25,
  }, {
    type: 'stop',
    x: 35,
    y: -25,
    orientation: 'up',
    label: {
      text: 'Enchanted Tales\nwith Belle',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 45,
    y: -25,
    orientation: 'up',
    label: {
      text: 'Be Our\nGuest',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 55,
    y: -25,
    orientation: 'up',
    label: {
      text: "Gaston's\nTavern",
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 65,
    y: -25,
    orientation: 'up',
    label: {
      text: 'Under\nthe Sea',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 75,
    y: -25,
    orientation: 'up',
    label: {
      text: 'Big Top\nSouveniers',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 77,
    y: -25,
    orientation: 'down',
    label: {
      text: 'Dumbo',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: 85,
    y: -25,
    orientation: 'up',
    label: {
      text: "Pete's Silly\nSideshow",
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 87,
    y: -25,
    orientation: 'down',
    label: {
      text: 'Barnstormer',
      alignment: 'below',
    },
  }, {
    type: 'station',
    x: 95,
    y: -25,
    label: {
      text: 'WDW\nRailroad',
      alignment: 'right',
    },
  }],
}, {
  color: '#ffd203',
  points: [{
    type: 'point',
    x: 35,
    y: -25,
  }, {
    type: 'corner',
    x: 40,
    y: -25,
  }, {
    type: 'point',
    x: 40,
    y: -20,
  }, {
    type: 'corner',
    x: 40,
    y: -15,
  }, {
    type: 'point',
    x: 45,
    y: -15,
  }, {
    type: 'stop',
    orientation: 'up',
    x: 50,
    y: -15,
    label: {
      text: 'Seven Dwarfs\nMine Train',
      alignment: 'above',
    },
  }, {
    type: 'point',
    x: 55,
    y: -15,
  }, {
    type: 'corner',
    x: 55,
    y: -15,
  }, {
    type: 'point',
    x: 55,
    y: -15,
  }, {
    type: 'corner',
    x: 60,
    y: -15,
  }, {
    type: 'point',
    x: 60,
    y: -20,
  }, {
    type: 'corner',
    x: 60,
    y: -25,
  }, {
    type: 'point',
    x: 65,
    y: -25,
  }],
}, {
  color: '#ffd203',
  points: [{
    type: 'point',
    x: 30,
    y: -20,
  }, {
    type: 'corner',
    x: 30,
    y: -25,
  }, {
    type: 'point',
    x: 25,
    y: -25,
  }, {
    type: 'stop',
    x: 20,
    y: -25,
    orientation: 'up',
    label: {
      text: "Peter Pan's\nFlight",
      alignment: 'above',
    },
  }, {
    type: 'endcap',
    x: 15,
    y: -25,
    orientation: 'vertical',
    label: {
      text: 'it\'s a small world',
      alignment: 'left',
    },
  }],
}, {
  color: '#939ba1',
  dashed: true,
  points: [{
    type: 'point',
    x: 30,
    y: 55,
  }, {
    type: 'point',
    x: 15,
    y: 55,
  }, {
    type: 'corner',
    x: 10,
    y: 55,
  }, {
    type: 'point',
    x: 10,
    y: 60,
  }, {
    type: 'corner',
    x: 10,
    y: 65,
  }, {
    type: 'point',
    x: 5,
    y: 65,
  }, {
    type: 'point',
    x: -40,
    y: 65,
  }, {
    type: 'corner',
    x: -45,
    y: 65,
  }, {
    type: 'point',
    x: -45,
    y: 60,
  }, {
    type: 'station',
    x: -45,
    y: 20,
    label: {
      text: 'WDW\nRailroad',
      alignment: 'left',
    },
  }, {
    type: 'point',
    x: -45,
    y: -35,
  }, {
    type: 'corner',
    x: -45,
    y: -40,
  }, {
    type: 'point',
    x: -40,
    y: -40,
  }, {
    type: 'point',
    x: 90,
    y: -40,
  }, {
    type: 'corner',
    x: 95,
    y: -40,
  }, {
    type: 'point',
    x: 95,
    y: -35,
  }, {
    type: 'point',
    x: 95,
    y: -25,
  }, {
    type: 'point',
    x: 95,
    y: 50,
  }, {
    type: 'corner',
    x: 95,
    y: 55,
  }, {
    type: 'point',
    x: 90,
    y: 55,
  }, {
    type: 'point',
    x: 30,
    y: 55,
  }],
}]
