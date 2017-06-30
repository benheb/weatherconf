(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

mapboxgl.accessToken = 'pk.eyJ1IjoiYmhlYmVydG8iLCJhIjoiY2o0NHkwajFiMTRiZDJ3cnV3NXZ2ZDdhaCJ9.ldXvHTNSDKyK_f82a2k6Xg';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/light-v9', //stylesheet location
  center: [20.50, 50], // starting position
  zoom: 1.3 // starting zoom
});

map.on('load', function () {
  map.addSource('gfs-source', {
    'type': 'vector',
    'tiles': ['https://s3-us-west-2.amazonaws.com/weather-api/tiles/models/gfs/2017042100/t00z/012/lev_2_m_above_ground/TMP/{z}/{x}/{y}.mvt']
  });

  map.addLayer({
    'id': 'gfs-id',
    'source': 'gfs-source',
    'source-layer': 'geojsonLayer',
    'type': 'fill',
    'paint': {
      'fill-color': {
        property: 'DN',
        stops: [[40, '#a50026'], [35, '#b21127'], [30, '#be1d27'], [27, '#cb2727'], [25, '#d83228'], [23, '#df442f'], [21, '#e75336'], [19, '#ee623d'], [17, '#f57144'], [16, '#f7824c'], [15, '#fa9354'], [14, '#fca35b'], [13, '#fdb265'], [12, '#febf70'], [11, '#ffcc7d'], [10, '#fed889'], [9, '#fee395'], [8, '#ffeba1'], [7, '#fff3ad'], [6, '#fffbb9'], [5, '#fcfdc6'], [4, '#f5fad5'], [3, '#edf7e4'], [3, '#e4f4f2'], [2, '#d8eff6'], [0, '#cbe8f2'], [-1, '#bde2ee'], [-2, '#afdbea'], [-3, '#a1d1e5'], [-4, '#94c6df'], [-6, '#85bad8'], [-8, '#77afd2'], [-10, '#6ba1cb'], [-11, '#5f93c4'], [-13, '#5384bc'], [-15, '#4676b5'], [-18, '#4266ad'], [-22, '#3d56a5'], [-25, '#38469d'], [-30, '#313695']].reverse()
      },
      'fill-opacity': 0.85
      // }, 'building' );
    } }, 'water'); //looks cool!

  // map.addLayer({
  //   'id': 'gfs-labels',
  //   'source': 'gfs-source',
  //   'source-layer': 'geojsonLayer',
  //   "type": 'symbol',
  //   'layout': {
  //     "symbol-placement": "line",
  //     "text-field": '{DN} °C',
  //     "text-font": ["Open Sans Regular","Arial Unicode MS Regular"],
  //     "text-letter-spacing": 0,
  //     "text-line-height": 1.6,
  //     "text-rotation-alignment": "viewport",
  //     "text-size": 10,
  //     'visibility': 'visible'
  //   },
  //   "paint": {
  //     "text-opacity": 1,
  //     "text-halo-color": "#FFF",
  //     "text-halo-width": 1,
  //     "text-halo-blur": 0.5,
  //     "text-color": "#222"
  //   }
  // }, 'water' );


  setTimeout(function () {
    map.flyTo({
      center: [-104, 40],
      zoom: 6,
      bearing: 0,
      speed: 0.4, // make the flying slow
      curve: 1.4, // change the speed at which it zooms out
      easing: function (t) {
        return t;
      }
    });
  }, 2000);

  // setTimeout(function() {
  //   map.flyTo({
  //     center: [
  //       -74,
  //       41
  //     ],
  //     zoom: 7,
  //     bearing: 0,
  //     speed: 1.5, // make the flying slow
  //     curve: 5, // change the speed at which it zooms out
  //     easing: function (t) {
  //       return t;
  //     }
  //   });
  // },7000);
});

},{}]},{},[1]);
