import { Map } from "./Map";

export function MapWrapper({ markers }) {
  const flooded = markers.filter(function (m) {
    return m.status === "flooded";
  }).length;

  const floodWarning = markers.filter(function (m) {
    return m.status === "floodWarning";
  }).length;

  return (
    <div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <Map markers={markers} />
          </div>

          <div className="bg-red-600 px-8 py-6 mb-4 rounded">
            <p className="font-bold text-xl text-white">
              Áreas alagadas: {flooded}
            </p>
          </div>
          <div className="bg-yellow-300 px-8 py-6 mt-4 rounded">
            <p className="font-bold text-xl">
              Áreas com alerta de alagamento: {floodWarning}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
