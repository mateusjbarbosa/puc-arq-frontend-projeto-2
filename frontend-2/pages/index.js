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
  const res = await fetch("http://localhost:3004/mapMarkers");
  const json = await res.json();

  return {
    mapMarkers: json,
  };
};
