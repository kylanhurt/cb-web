import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {compose, withProps} from 'recompose'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';

const Map = compose(
  withProps({
    //generate your API key
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD84CRFR44xSC242F5rPodUZ3CqKbUlqMw&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div className='map' style={{height: `360px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{lat: 56.009483, lng: 92.8121694}}
  />
);

export default class BasicMap extends PureComponent {
  render() {
    return (
      <Col xs={12} md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Basic map</h5>
            </div>
            <Map/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}