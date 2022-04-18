import Geometry from '../src/Geometry.js';

test('Can create a Point', () => {
	const geometry = new Geometry('Point', [100.0, 1.0]);

	expect(geometry.toJSON()).toEqual({
		"type": "Point",
		"coordinates": [100.0, 1.0]
	});
});
