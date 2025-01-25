import { Viewer, Entity, PointGraphics, EntityDescription, GeoJsonDataSource } from 'resium'
import { Cartesian3 } from "cesium";

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

export function GlobeWindow() {
  return (
    <Viewer>
      <Entity position={position}>
        <PointGraphics pixelSize={10}/>
        <EntityDescription>
          <h1>New York City</h1>
          <p>This point marks a location in New York City, known for its iconic skyline and vibrant culture.</p>
        </EntityDescription>
        <GeoJsonDataSource data={data} />
      </Entity> 
    </Viewer>
  );
}