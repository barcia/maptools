import Geometry from '../src/Geometry.js';

test('Can`t create an invalid Geometry type. It must be null.', () => {
	const geometry = new Geometry('point', [100.0, 1.0]);
	expect(geometry.toJSON()).toBeNull;
});

test('Can`t create a Geometry with invalid coords', () => {
	const geometry = new Geometry('Point', '100.0, 1.0');
	expect(geometry.toJSON()).toBeNull;
});
