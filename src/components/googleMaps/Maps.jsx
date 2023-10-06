import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  maxHeight: '400px' // Puedes ajustar esto según sea necesario para evitar que el mapa crezca demasiado
};


function Maps({lat, lng}) {
    <></>
//   const [map, setMap] = React.useState(null)
//     const center = {
//         lat: 25,
//         lng: 25
//     };
//     console.log(map)
//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY
//     })
  
  
//     const onLoad = React.useCallback(function callback(map) {
//       // This is just an example of getting and using the map instance!!! don't just blindly copy!
//       const bounds = new window.google.maps.LatLngBounds(center);
//       map.fitBounds(bounds);
  
//       setMap(map)
//     }, [])
  
//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])
  
//     return isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           {/* Agrega un marcador */}
//           <Marker position={center} />
//         </GoogleMap>
//     ) : <><h1>ERROR
//       </h1></>
  }
  
  export default React.memo(Maps)