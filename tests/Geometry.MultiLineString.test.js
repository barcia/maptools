import Geometry from '../src/Geometry.js';

const line1 = new Geometry('LineString', [
	[100.0, 0.0],
	[101.0, 0.0],
	[101.0, 1.0],
	[100.0, 1.0],
])

const line2 = new Geometry('LineString', [
	[100.8, 0.8],
	[100.8, 0.2],
	[100.2, 0.2],
	[100.2, 0.8],
])

test('Can create a MultiLineString', () => {
	const geometry = new Geometry('MultiLineString', [
		line1.toJSON().coordinates,
		line2.toJSON().coordinates,
	]);

	expect(geometry.toJSON()).toEqual({
		"type": "MultiLineString",
		"coordinates": [
			line1.toJSON().coordinates,
			line2.toJSON().coordinates,
		]
	});
});

test('Can`t create a MultiLineString with bad syntax', () => {
	const geometry = new Geometry('MultiLineString', [
		line1.toJSON().coordinates,
		line2.toJSON().coordinates,
		[100.2, 0.2]
	]);

	expect(geometry.toJSON()).toBeNull();
});
