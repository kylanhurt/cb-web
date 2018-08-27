import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {compose, withProps, withStateHandlers} from 'recompose'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import {InfoBox} from 'react-google-maps/lib/components/addons/InfoBox';
import CloseIcon from 'mdi-react/CloseIcon';

const MapWithAMarker = compose(
  withProps({
    //generate your API key
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD84CRFR44xSC242F5rPodUZ3CqKbUlqMw&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div className='map' style={{height: `360px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withStateHandlers(() => ({
    isOpen: true,
  }), {
    onToggleOpen: ({isOpen}) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 56.009483, lng: 92.8121694}}
  >
    {props.isMarkerShown &&
    <Marker position={{lat: 56.009483, lng: 92.8121694}} onClick={props.onToggleOpen}>
      {props.isOpen &&
      <InfoBox options={{closeBoxURL: ``, enableEventPropagation: true}}>
        <div className='map__marker-label'>
          <div className='map__marker-label-content'>
            <div className='map__maker-label-close' onClick={props.onToggleOpen}><CloseIcon/></div>
            DRAKARYS!!!
          </div>
        </div>
      </InfoBox>}
    </Marker>}
  </GoogleMap>
);

export default class BasicMap extends PureComponent {
  render() {
    return (
      <Col xs={12} md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>pin WITH INFO WINDOW</h5>
            </div>
            <MapWithAMarker isMarkerShown={true}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}