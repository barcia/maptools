
class GeometryCollection {
	constructor(geometries) {
		this.geometries = geometries

		this.element = this.#createGeometryCollection(this.geometries)
	}

	#createGeometryCollection(geometries) {
		const element = {
			type: 'GeometryCollection',
			geometries: geometries || [],
		}

		return element
	}

	addGeometries(geometries) {
		this.geometries.push(...geometries)
	}

	toJSON() {
		return this.element
	}

	static fromJSON(json) {
		return new GeometryCollection(json.geometries);
	}
}

export default GeometryCollection;
