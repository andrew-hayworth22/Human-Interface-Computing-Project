import jsvectormap from '../interactive map/dist/js/jsvectormap'
import '../interactive map/dist/maps/world'

var map = new JsVectorMap({
    map: 'world',
    backgroundColor: 'tranparent',
    draggable: true,
    zoomButtons: true,
    zoomOnScroll: true,
    zoomOnScrollSpeed: 3,
    zoomMax: 12,
    zoomMin: 1,
    zoomAnimate: true,
    showTooltip: true,
    zoomStep: 1.5,
    bindTouchEvents: true,
    focusOn: {}, // focus on regions on page load
    /**
     * Markers options
     */
    markers: null, // Set of markers to add to the map during initialization
    markersSelectable: false,
    markersSelectableOne: false,
    markerStyle: {
      // Marker style
      initial: {
        r: 7,
        fill: 'black',
        fillOpacity: 1,
        stroke: '#FFF',
        strokeWidth: 5,
        strokeOpacity: .65
      },
      hover: {
        fill: '#3cc0ff',
        stroke: '#5cc0ff',
        cursor: 'pointer',
        strokeWidth: 2
      },
      selected: {
        fill: 'blue'
      },
      selectedHover: {}
    },
    // Marker Label style
    markerLabelStyle: {
      initial: {
        fontFamily: 'Verdana',
        fontSize: 12,
        fontWeight: 'bold',
        cursor: 'default',
        fill: 'black'
      },
      hover: {
        cursor: 'pointer'
      }
    },
    /**
     * Region styles
     */
    labels: { // add a label for a specific region
      regions: {
        render(code) {
          return ['EG', 'KZ', 'CN'].indexOf(code) > -1 ? 'Hello ' + code : ''
        },
      }
    },
    regionsSelectable: false,
    regionsSelectableOne: false,
    regionStyle: {
      // Region style
      initial: {
        fill: '#e3eaef',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 0,
        strokeOpacity: 1
      },
      hover: {
        fillOpacity: .7,
        cursor: 'pointer'
      },
      selected: {
        fill: '#000'
      },
      selectedHover: {}
    },
    // Region label style
    regionLabelStyle: {
      initial: {
        fontFamily: 'Verdana',
        fontSize: '12',
        fontWeight: 'bold',
        cursor: 'default',
        fill: '#35373e'
      },
      hover: {
        cursor: 'pointer'
      }
    },
    series: {
      markers: [
        // You can add one or more objects to create series for markers.
      ],
      regions: [
        // You can add one or more objects to create series for regions.
      ]
    }
})