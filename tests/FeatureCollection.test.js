import FeatureCollection from '../src/FeatureCollection.js';

const feature1 = {
	type: 'Feature',
	geometry: {
		type: 'Point',
		coordinates: [100.0, 1.0],
	},
	properties: {
		name: 'Petroglyph'
	}
}

const feature2 = {
	type: 'Feature',
	geometry: {
		type: 'LineString',
		coordinates: [
			[100.0, 0.0, 123.32],
			[101.0, 1.0],
			[90.0, 9.0, 300],
			[20.0, 9.0]
		],
	},
	properties: {}
}

const feature3 = {
	type: 'Feature',
	geometry: {
		type: 'Polygon',
		coordinates: [
			[
				[100.0, 0.0],
				[101.0, 0.0],
				[101.0, 1.0],
				[100.0, 1.0],
				[100.0, 0.0]
			],
			[
				[100.8, 0.8],
				[100.8, 0.2],
				[100.2, 0.2],
				[100.2, 0.8],
				[100.8, 0.8]
			]
		]
	},
	properties: {}
}


test('Can create a FeatureCollection', () => {
	const featureCollection = new FeatureCollection([feature1, feature2], { name: 'My Elements' });

	expect(featureCollection.toJSON()).toEqual({
		type: 'FeatureCollection',
		features: [feature1, feature2],
		properties: { name: 'My Elements' }
	});
});

test('Can create a FeatureCollection without properties', () => {
	const featureCollection = new FeatureCollection([feature1, feature2]);

	expect(featureCollection.toJSON()).toEqual({
		type: 'FeatureCollection',
		features: [feature1, feature2],
		properties: {}
	});
});


test('Can add features to FeatureCollection', () => {
	const featureCollection = new FeatureCollection([feature1]);

	featureCollection.addFeatures([feature2, feature3]);

	expect(featureCollection.toJSON()).toEqual({
		type: 'FeatureCollection',
		features: [feature1, feature2, feature3],
		properties: {}
	});
});

test('Can remove features from FeatureCollection', () => {
	const featureCollection = new FeatureCollection([feature1, feature2, feature3]);

	featureCollection.removeFeatures( feat => feat.properties.name === 'Petroglyph' );

	expect(featureCollection.toJSON()).toEqual({
		type: 'FeatureCollection',
		features: [feature2, feature3],
		properties: {}
	});
});
