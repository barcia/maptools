import Geometry from '../src/Geometry.js';

const point1 = new Geometry('Point', [100.0, 0.0]);
const point2 = new Geometry('Point', [101.0, 1.0]);
const point3 = new Geometry('Point', [90.0, 9.0, 300]);
const point4 = new Geometry('Point', [20.0, 9.0]);

test('Can create a MultiPoint', () => {
	const geometry = new Geometry('MultiPoint', [
		point1.toJSON().coordinates,
		point2.toJSON().coordinates,
		point3.toJSON().coordinates,
		point4.toJSON().coordinates
	]);

	expect(geometry.toJSON()).toEqual({
		"type": "MultiPoint",
		"coordinates": [
			point1.toJSON().coordinates,
			point2.toJSON().coordinates,
			point3.toJSON().coordinates,
			point4.toJSON().coordinates
		]
	});
});

test('Can`t create a MultiPoint with bad syntax', () => {
	const geometry = new Geometry('MultiPoint', [
		point1.toJSON().coordinates,
		point2.toJSON().coordinates,
		point3.toJSON().coordinates,
		["100"]
	]);

	expect(geometry.toJSON()).toBeNull();
});
