export default [{
  name: 'Main Street, USA',
  color: '#f02a0f',
  points: [{
    type: 'station',
    x: 30,
    y: 10,
    label: {
      text: 'Cinderella\nCastle',
      alignment: 'below,right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 31,
    orientation: 'right',
    label: {
      text: 'Partners Statue',
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 37,
    orientation: 'right',
    label: {
      text: "Walt's Window",
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 39,
    orientation: 'left',
    label: {
      text: "Casey's Corner",
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 43,
    orientation: 'right',
    label: {
      text: 'Main Street Confectionary',
      alignment: 'right',
    },
  }, {
    type: 'stop',
    x: 30,
    y: 45,
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
    hard: true,
  }, {
    type: 'point',
    x: 45,
    y: 10,
  }, {
    type: 'point',
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
    x: 59,
    y: 20,
    orientation: 'up',
    label: {
      text: 'Monster\'s Inc\nLaugh Floor',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: 65,
    y: 20,
    orientation: 'down',
    label: {
      text: 'Buzz Lightyear\nSpace Ranger Spin',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: 75,
    y: 20,
    orientation: 'up',
    label: {
      text: 'Tomorrowland Transit\n Authority PeopleMover',
      alignment: 'above',
    },
  }, {
    type: 'point',
    x: 85,
    y: 20,
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
    type: 'point',
    x: 85,
    y: 20,
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
    x: 9,
    y: 10,
    orientation: 'down',
    label: {
      text: 'The Muppets\nPresent...',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: 3,
    y: 10,
    orientation: 'up',
    label: {
      text: 'Liberty Tree\nTavern',
      alignment: 'above',
    },
  }, {
    type: 'point',
    x: -5,
    y: 10,
    hard: true,
  }, {
    type: 'stop',
    x: -5,
    y: -5,
    label: {
      text: 'Memento Mori',
      alignment: 'right',
    },
  }, {
    type: 'endcap',
    x: -5,
    y: -11,
    label: {
      text: 'The Haunted\nMansion',
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
    type: 'point',
    x: -5,
    y: 10,
  }, {
    type: 'point',
    x: -5,
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
      text: 'Pecos Bill\nTall Tale Inn',
      alignment: 'below',
    },
  }, {
    type: 'point',
    x: -40,
    y: 20,
    hard: true,
  }, {
    type: 'stop',
    x: -20,
    y: 20,
    orientation: 'down',
  }, {
    type: 'stop',
    x: -30,
    y: 20,
    orientation: 'down',
  }, {
    type: 'point',
    x: -40,
    y: 20,
    hard: true,
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
      text: 'Big Thunder\nMountain Railroad',
      alignment: 'right',
    },
  }],
}, {
  name: 'Adventureland',
  color: '#00853d',
  points: [{
    type: 'point',
    x: -40,
    y: 20,
    hard: true,
  }, {
    type: 'point',
    x: -40,
    y: 47,
  }, {
    type: 'stop',
    x: -35,
    y: 47,
    orientation: 'down',
    label: {
      text: 'Pirates of\nthe Caribbean',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: -30,
    y: 47,
    orientation: 'up',
    label: {
      text: 'Tortuga\nTavern',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: -23,
    y: 47,
    orientation: 'down',
    label: {
      text: 'Aloha Isle',
      alignment: 'below',
    },
  }, {
    type: 'stop',
    x: -16,
    y: 47,
    orientation: 'up',
    label: {
      text: 'Enchanted\nTiki Room',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    x: -10,
    y: 47,
    orientation: 'down',
    label: {
      text: 'Jungle Cruise',
      alignment: 'below',
    },
  }, {
    type: 'point',
    x: -5,
    y: 47,
  }, {
    type: 'stop',
    x: -5,
    y: 37,
    orientation: 'left',
    label: {
      text: 'Sunshine Seasons',
      alignment: 'left',
    },
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
    y: -8,
    orientation: 'left',
    label: {
      text: 'Prince Charming\nRegal Carrousel',
      alignment: 'left',
    },
  }, {
    type: 'stop',
    x: 30,
    y: -11,
    orientation: 'right',
    label: {
      text: "Mickey's PhilharMagic",
      alignment: 'right',
    },
  }, {
    type: 'point',
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
      text: 'Big Top\nSouvenirs',
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
    type: 'point',
    x: 40,
    y: -25,
  }, {
    type: 'point',
    x: 40,
    y: -15,
  }, {
    type: 'stop',
    orientation: 'up',
    x: 47,
    y: -15,
    label: {
      text: 'Seven Dwarfs\nMine Train',
      alignment: 'above',
    },
  }, {
    type: 'stop',
    orientation: 'up',
    x: 61,
    y: -15,
    label: {
      text: 'The Many Adventures\nof Winnie the Pooh',
      alignment: 'above',
    },
  }, {
    type: 'point',
    x: 70,
    y: -15,
  }, {
    type: 'point',
    x: 70,
    y: -25,
  }, {
    type: 'point',
    x: 75,
    y: -25,
  }],
}, {
  color: '#ffd203',
  points: [{
    type: 'point',
    x: 30,
    y: -20,
  }, {
    type: 'point',
    x: 30,
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
    hard: true,
  }, {
    type: 'point',
    x: 10,
    y: 55,
  }, {
    type: 'point',
    x: 10,
    y: 65,
  }, {
    type: 'point',
    x: -45,
    y: 65,
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
    y: -40,
  }, {
    type: 'point',
    x: 95,
    y: -40,
  }, {
    type: 'point',
    x: 95,
    y: 55,
  }, {
    type: 'point',
    x: 30,
    y: 55,
  }],
}]
