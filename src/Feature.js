import Geometry from './Geometry.js';

class Feature {
    /**
     * Create a Feature.
     * @param {string} type - The Feature type.
     * @param {Array} coords - The Feature coordinates. [lon, lat]. Or null.
     * @param {object} props - The Feature properties.
     */
	constructor(type, coords, props) {
		this.type = type;
		this.coords = coords;
		this.props = props;

		this.geometry = new Geometry(this.type, this.coords);

		this.geometry.toJSON() !== null
		? this.element = this.#createFeature(this.geometry.toJSON(), this.props)
		: this.element = null;
	}


	/**
	 * Create a valid GeoJSON Feature
	 * @returns {Object} GeoJSON Feature
	 * @private
	 */
	#createFeature(geometry, props) {
		const element = {
			type: 'Feature',
			geometry: geometry || null,
			properties: props || {}
		}
		return element;
	}

	/**
	 * Add a new property to the feature or update an existing one.
	 * @param {string} key - The property key.
	 * @param {*} value - The property value.
	 */
	addProperty(key, value) {
		this.element.properties[key] = value;
	}

	/**
	 * Return the Feature object.
	 * @returns {object} - The Feature object
	 */
	toJSON() {
		return this.element;
	}

	/**
	 * Create a Feature from a GeoJSON Feature.
	 * @param {object} json - The GeoJSON Feature.
	 * @returns {Feature} - The Feature instance.
	 * @static
	 */
	static fromJSON(json) {
		return new Feature(json.geometry.type, json.geometry.coordinates, json.properties);
	}
}

export default Feature;
