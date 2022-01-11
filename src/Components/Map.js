import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { useParams } from "react-router-dom";


const Icon = ({id}) => <img src={`https://robohash.org/${id}?size=50x50`}/>;

const Map = () => {
   let params = useParams();
   console.log(params.lat);
   console.log(params.lng);

   let defaultProps = {
    center: {
      lat: 10,
      lng: 10
    },
    zoom: 1
  };

  let Props = {
    center: {
      lat: parseInt(params.lat),
      lng: parseInt(params.lng)
    },
  };

  
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDBq_AMquyaX_Yf_NGmM8PazSsvaYUB8CM' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          center={Props.center}
        >
          <Icon 
          lat={Props.center.lat}
          lng={Props.center.lng}
          id={params.id}/>

        </GoogleMapReact>
      </div>
    );
  }


export default Map;