import GeometryCollection from '../src/GeometryCollection.js';

const geometry1 = {
	type: 'Point',
	coordinates: [100.0, 1.0],
}

const geometry2 = {
	type: 'LineString',
	coordinates: [
		[100.0, 0.0, 123.32],
		[101.0, 1.0],
		[90.0, 9.0, 300],
		[20.0, 9.0]
	],
}

test('Can create a GeometryCollection', () => {
	const geometryCollection = new GeometryCollection([geometry1, geometry2]);

	expect(geometryCollection.toJSON()).toEqual({
		type: 'GeometryCollection',
		geometries: [geometry1, geometry2]
	});
});
