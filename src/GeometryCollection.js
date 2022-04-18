/**
 * Create a GeometryCollection.
 * @param {Array} geometries - The GeometryCollection features array.
 * @example
 * const geometryCollection = new GeometryCollection([
 * 	new Geometry('Point', [100.0, 0.0]).toJSON(),
 * 	new Geometry('Point', [101.0, 1.0]).toJSON()
 * ]);
 */
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

	/**
	 * Add new geometries to the GeometryCollection.
	 * @param {Array} geometries - The array with geometries to add.
	 * @example
	 * geometryCollection.addGeometries([
	 * 	new Geometry('Point', [103.0, 7.0]).toJSON(),
	 * ]);
	 */
	addGeometries(geometries) {
		this.geometries.push(...geometries)
	}

	/**
	 * Return the GeometryCollection object.
	 * @returns {Object} - The GeometryCollection object
	 * @example
	 * geometryCollection.toJSON();
	 */
	toJSON() {
		return this.element
	}

	/**
	 * Create a GeometryCollection from a GeoJSON geometryCollection object.
	 * @param {Object} json - A valid GeoJSON geometryCollection object.
	 * @param {('GeometryCollection')} json.type - The geometryCollection type.
	 * @param {Array} json.geometries - An array of geometries.
	 * @return {GeometryCollection} - The GeometryCollection instance.
	 * @static
	 * @example
	 * const geometryCollection = GeometryCollection.fromJSON({
	 * 	type: 'GeometryCollection',
	 * 	geometries: [
	 * 		{
	 * 			type: 'Point',
	 * 			coordinates: [100.0, 0.0]
	 * 		},
	 * 		{
	 * 			type: 'Point',
	 * 			coordinates: [101.0, 1.0]
	 * 		}
	 * 	]
	 * });
	 */
	static fromJSON(json) {
		return new GeometryCollection(json.geometries);
	}
}

export default GeometryCollection;
