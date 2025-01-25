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
    <div style={{padding: '8px', height: '100%', width: '100%'}}>
      <Viewer timeline={false} fullscreenButton={false} animation={false} style={{ height: '98%', width: '98%' }}>
        <Entity position={position} name='New York'>
          <PointGraphics pixelSize={10}/>
          <EntityDescription>
            <h1>Ney York City</h1>
            <p>New York City, often simply called New York, is the most populous city in the United States. Known for its significant impact on commerce, finance, media, art, fashion, research, technology, education, and entertainment, it is an important center for international diplomacy and has been described as the cultural, financial, and media capital of the world.</p>
          </EntityDescription>
        </Entity>
        <GeoJsonDataSource data={data}/>
      </Viewer>
    </div>
  );
}