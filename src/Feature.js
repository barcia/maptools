import Geometry from './Geometry.js';

/** Create a GeoJSON Feature.
 * @param {('Point'|'LineString'|'Polygon'|'MultiPoint'|'MultiLineString'|'MultiPolygon')} type - The Feature type.
 * @param {Array} coords - The Feature coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
 * @param {Object} [props] - The Feature properties.
 * @example
 * const feature = new Feature('Point', [105.0, 4.0], { name: 'foo' });
*/
class Feature {
	constructor(type, coords, props) {
		this.type = type;
		this.coords = coords;
		this.props = props;

		this.geometry = new Geometry(this.type, this.coords);

		this.geometry.toJSON() !== null
		? this.element = this.#createFeature(this.geometry.toJSON(), this.props)
		: this.element = null;
	}

	#createFeature(geometry, props) {
		const element = {
			type: 'Feature',
			geometry: geometry || null,
			properties: props || {}
		}
		return element;
	}

	/**
	 * Add a new property to the Feature or update an existing one.
	 * @param {string} key - The property key.
	 * @param {*} value - The property value.
	 * @example
	 * feature.addProperty('desc', 'bar');
	 */
	addProperty(key, value) {
		this.element.properties[key] = value;
	}

	/**
	 * Return the Feature object.
	 * @return {Object} - The Feature object
	 * @example
	 * feature.toJSON();
	 */
	toJSON() {
		return this.element;
	}

	/**
	 * Create a Feature instance from a GeoJSON feature object.
	 * @param {Object} json - A valid GeoJSON feature object.
	 * @param {('Feature')} json.type - The feature type.
	 * @param {Object} json.geometry - A valid GeoJSON geometry.
	 * @param {('Point'|'LineString'|'Polygon'|'MultiPoint'|'MultiLineString'|'MultiPolygon')} json.geometry.type - The Feature geometry type.
	 * @param {Array} json.geometry.coordinates - The Feature coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
	 * @param {Object} [json.properties] - The Feature properties.
	 * @returns {Feature} - The Feature instance.
	 * @static
	 * @example
	 * const feature = Feature.fromJSON({
	 * 	type: 'Feature',
	 * 	geometry: {
	 * 		type: 'Point',
	 * 		coordinates: [105.0, 4.0]
	 * 	},
	 * 	properties: {
	 * 		name: 'foo'
	 * 	}
	 * });
	 */
	static fromJSON(json) {
		return new Feature(json.geometry.type, json.geometry.coordinates, json.properties);
	}
}

export default Feature;
