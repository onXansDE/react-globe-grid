import { Viewer, Entity, PointGraphics, EntityDescription, GeoJsonDataSource, Globe } from 'resium'
import { Cartesian3, Ion } from "cesium";
import { token } from "../../config.json"

// New York Point
const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

// GEOJSON DATA
const data = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

Ion.defaultAccessToken = token;

export function GlobeWindow() {
  return (
    <Viewer timeline={false} fullscreenButton={false} animation={false} style={{ height: '100%', width: '100%' }}>
    </Viewer>
  );
}