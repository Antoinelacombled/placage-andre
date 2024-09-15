import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Maps() {
  const defaultProps = {
    center: {
      lat: 48.8453749,
      lng: 2.3947583,
    },
    zoom: 15,
  };

  console.log(process.env.GOOGLE_MAPS_API_KEY);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

// AIzaSyBgbv-APXtDtZsENk7DUj2CAuUb6y2WW6w
