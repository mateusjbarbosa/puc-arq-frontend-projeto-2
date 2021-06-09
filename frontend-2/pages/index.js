import { Header } from "../components/Header";
import { MapWrapper } from "../components/MapWrapper";

export default function Home({ mapMarkers }) {
  return (
    <>
      <Header />
      <MapWrapper markers={mapMarkers} />
    </>
  );
}

Home.getInitialProps = async () => {
  return {
    mapMarkers: [
      {
        position: {
          lat: -19.90375588214059,
          lng: -43.93853426116382,
        },
        status: "flooded",
      },
      {
        position: {
          lat: -19.933599741640776,
          lng: -43.98515652370336,
        },
        status: "floodWarning",
      },
      {
        position: {
          lat: -19.890178372113155,
          lng: -43.92063718681564,
        },
        status: "floodWarning",
      },
    ],
  };
};
