import { isGeometryType, isValidGeometry } from './validators.js';

/** Create a GeoJSON Geometry.
 * @param {('Point'|'LineString'|'Polygon'|'MultiPoint'|'MultiLineString'|'MultiPolygon')} type - The Geometry type.
 * @param {Array} coords - The Geometry coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
 * @example
 * const geometry = new Geometry('Point', [105.0, 4.0]);
*/
class Geometry {
	constructor(type, coords) {
		this.type = type;
		this.coords = coords;

		Geometry.validate(this.type, this.coords)
		? this.element = this.#createGeometry(this.type, this.coords)
		: this.element = null;
	}

	#createGeometry(type, coords) {
		const element = {
			type,
			coordinates: coords
		}
		return element;
	}

	/**
	 * Return the Geometry object.
	 * @return {Object} - The Geometry object
	 * @example
	 * // { type: 'Point', coordinates: [105.0, 4.0] }
	 * geometry.toJSON();
	 */
	toJSON() {
		return this.element;
	}

	/**
	 * Create a Geometry instance from a GeoJSON geometry object.
	 * @param {Object} json - A valid GeoJSON geometry object.
	 * @param {('Point'|'LineString'|'Polygon'|'MultiPoint'|'MultiLineString'|'MultiPolygon')} json.type - The Geometry type.
	 * @param {Array} json.coordinates - The Geometry coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
	 * @return {Geometry} - The Geometry instance.
	 * @static
	 * @example
	 * const geometry = Geometry.fromJSON({
	 * 		type: 'Point',
	 * 		coordinates: [105.0, 4.0]
	 * 	});
	 */
	static fromJSON(json) {
		return new Geometry(json.type, json.coordinates);
	}

	/**
	 * Validate a Geometry.
	 * @param {('Point'|'LineString'|'Polygon'|'MultiPoint'|'MultiLineString'|'MultiPolygon')} type - The Geometry type.
	 * @param {Array} coords - The Geometry coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
	 * @return {boolean} - True if the Geometry is valid, false otherwise.
	 * @static
	 * @example
	 * const isValidPoint = Geometry.validate({
	 * 		type: 'Point',
	 * 		coordinates: [105.0, 4.0]
	 * 	});
	 */
	static validate(type, coords) {
		return ( isGeometryType(type) && isValidGeometry(type, coords) ) ? true : false;
	}
}

export default Geometry;
