import { isGeometryType, isValidGeometry } from './validators.js';

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

	toJSON() {
		return this.element;
	}

	static fromJSON(json) {
		return new Geometry(json.type, json.coordinates);
	}

	static validate(type, coords) {
		return ( isGeometryType(type) && isValidGeometry(type, coords) ) ? true : false;
	}
}

export default Geometry;
