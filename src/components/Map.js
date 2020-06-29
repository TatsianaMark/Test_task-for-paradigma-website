import {GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';

export class Map extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>
            </>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ("YAIzaSyAZXAK1ziKJT9k4lq2WVDnu87Jliils9SE")
})(Map)