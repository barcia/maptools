import Geometry from '../src/Geometry.js';

const polygon1 = new Geometry('Polygon', [
	[
		[102.0, 2.0],
		[103.0, 2.0],
		[103.0, 3.0],
		[102.0, 3.0],
		[102.0, 2.0]
	]
])

const polygon2 = new Geometry('Polygon', [
	[
		[100.0, 0.0],
		[101.0, 0.0],
		[101.0, 1.0],
		[100.0, 1.0],
		[100.0, 0.0]
	],
	[
		[100.2, 0.2],
		[100.2, 0.8],
		[100.8, 0.8],
		[100.8, 0.2],
		[100.2, 0.2]
	]
])

test('Can create a MultiPolygon', () => {
	const geometry = new Geometry('MultiPolygon', [
		polygon1.toJSON().coordinates,
		polygon2.toJSON().coordinates,
	]);

	expect(geometry.toJSON()).toEqual({
		"type": "MultiPolygon",
		"coordinates": [
			polygon1.toJSON().coordinates,
			polygon2.toJSON().coordinates,
		]
	});
});

test('Can`t create a MultiPolygon with bad syntax', () => {
	const geometry = new Geometry('MultiPolygon', [
		polygon1.toJSON().coordinates,
		polygon2.toJSON().coordinates,
		[
			[100.2, 0.2],
			[100.2, 0.8],
			[100.8, 0.8],
			[100.8, 0.2],
			[100.2, 0.2]
		]
	]);

	expect(geometry.toJSON()).toBeNull();
});
