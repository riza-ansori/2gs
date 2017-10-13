import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import StyleMapsInsfilo from "./StyleMapsInsfilo.json";

const GMaps = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `50vh`, minHeight: '400px', }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
  withStateHandlers(() => ({
    isOpen: true,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -8.7642994, lng: 115.179359 }}
    defaultOptions={{ styles: StyleMapsInsfilo }}
  >
    <Marker
      position={{ lat: -8.7655775, lng: 115.1787755 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <div>
            <Image            
                width='140'
                src='/assets/images/2gssvg.png'
            /><br/>
            <p className='gmaps-info' style={{fontWeight: 600}}>Alamanda Bali, 5th Floor</p>
            <p className='gmaps-info' style={{fontWeight: 600}}>Jl. Bypass Ngurah Rai No.67,</p>
            <p className='gmaps-info first' style={{fontWeight: 600}}>Kuta Badung - Bali, Indonesia 80361</p>
            <p className='gmaps-info'><Icon name='phone' />+62 361 2003 021, +628562888585</p>
            <p className='gmaps-info'><Icon name='mail outline' />marketing@2gs.co</p>
        </div>
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

export default GMaps