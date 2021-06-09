import React from "react";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -19.90375588214059,
  lng: -43.93853426116382,
};

const labels = {
  flooded: "Alagado",
  floodWarning: "Alagamento em potencial",
};

export function Map({ markers }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDzoJ_bb4Z_J6VFgwWQV8UCfEqoQQcCA4c",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((m, i) => {
        return (
          <Marker key={i} position={m.position} label={labels[m.status]} />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}
