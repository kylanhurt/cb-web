import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {compose, withProps} from 'recompose';
import {GoogleMap, KmlLayer, withGoogleMap, withScriptjs} from 'react-google-maps';
import silverMapStyle from './silverMapStyle.json';

const MapWithAKmlLayer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD84CRFR44xSC242F5rPodUZ3CqKbUlqMw&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div className='map' style={{height: `380px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{lat: 41.878197, lng: -87.651229}}
    defaultOptions={{styles: silverMapStyle}}
  >
    <KmlLayer
      url='http://previews.aspirity.com/test/cta3.kml'
      options={{preserveViewport: true}}
    />
  </GoogleMap>
);

export default class TodayRunningMap extends PureComponent {
  
  render() {
    return (
      <Panel xs={12} lg={12} xl={9} md={12} title='Today Running Map'>
        <MapWithAKmlLayer/>
      </Panel>
    )
  }
}

//todo: LIIIINE

