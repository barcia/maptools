import fs from 'fs';

import Geometry from './src/Geometry.js';
import Feature from './src/Feature.js';
import FeatureCollection from './src/FeatureCollection.js';
import GeometryCollection from './src/GeometryCollection.js';

// const punto1 = new Geometry("Point", [102.4, 2.23455, 300]);
// const punto1 = new Feature('Point', [105.0, 3.0]);
// const punto2 = new Feature('Point', [103.0, 2.0]);
// const punto3 = new Feature('Point', [104.0, 2.0], { name: "Dolmen", });

const geopunto1 = {
	type: 'Feature',
	geometry: {
		type: 'Point',
		coordinates: [102.4, 2.23455, 300],
	},
	properties: {
		name: 'Dolmen',
		description: 'Dolmen de la ciudad de México',
		id: 'dolmen',
	},
}

const barcia = Feature.fromJSON(geopunto1)

console.log(barcia);

// fs.writeFileSync('data.geojson', JSON.stringify(geometry.toJSON()));
