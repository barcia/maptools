import Feature from '../src/Feature.js';

test('Can create a Feature', () => {
	const feature = new Feature('Point', [100.0, 1.0], { name: 'Castle', desc: 'A big castle' });

	expect(feature.toJSON()).toEqual({
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [100.0, 1.0],
		},
		properties: {
			name: 'Castle',
			desc: 'A big castle'
		},
	});
});

test('Can add properties to a Feature', () => {
	const feature = new Feature('Point', [100.0, 1.0]);

	feature.addProperty('url', 'example.com');

	expect(feature.toJSON()).toEqual({
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [100.0, 1.0],
		},
		properties: {
			url: 'example.com',
		},
	});
});

test('Can create a Feature without properties', () => {
	const feature = new Feature('Point', [100.0, 1.0]);

	expect(feature.toJSON()).toEqual({
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [100.0, 1.0],
		},
		properties: {},
	});
});
