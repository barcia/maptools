/**
 * Create a FeatureCollection.
 * @param {Array} features - The FeatureCollection features array.
 * @param {Object} [props] - The FeatureCollection properties.
 * @example
 * const featureCollection = new FeatureCollection([
 * 	new Feature('Point', [100.0, 0.0]).toJSON(),
 * 	new Feature('Point', [101.0, 1.0]).toJSON()
 * ], { name: 'foo' });
 */
class FeatureCollection {
	constructor(features, props) {
		this.features = features;
		this.props = props;

		this.element = this.#createFeatureCollection(this.features, this.props);
	}

	#createFeatureCollection(features, props) {
		const element = {
			type: 'FeatureCollection',
			features: features || [],
			properties: props || {}
		}
		return element
	}

	/**
	 * Add new features to the FeatureCollection.
	 * @param {Array} features - The array with Features to add.
	 * @example
	 * featureCollection.addFeatures([
	 * 	new Feature('Point', [103.0, 7.0]).toJSON(),
	 * ]);
	 */
	addFeatures(features) {
		this.features.push(...features)
	}

	/**
	 * Remove features from the FeatureCollection.
	 * @param {Function} func - The function to filter the features to remove. Uses native JS `Array.filter()` method.
	 * @param {boolean} [dryrun=false] - IF true, return the features to remove but don't remove them.
	 * @example
	 * featureCollection.removeFeatures(feature => feature.properties.name === 'foo');
	 */
	removeFeatures(func, dryrun) {
		const featuresToRemove = this.features.filter(func);

		if (dryrun === true) return featuresToRemove

		featuresToRemove.forEach(feature => {
			const index = this.features.indexOf(feature);
			this.features.splice(index, 1);
		});

	}

	/**
	 * Return the FeatureCollection object.
	 * @returns {Object} - The FeatureCollection object
	 * @example
	 * featureCollection.toJSON();
	 */
	toJSON() {
		return this.element
	}

	/**
	 * Create a FeatureCollection instance from a GeoJSON featureCollection object.
	 * @param {Object} json - A valid GeoJSON featureCollection object.
	 * @param {('FeatureCollection')} json.type - The featureCollection type.
	 * @param {Array} json.features - An array of features.
	 * @param {Object} [json.properties] - The FeatureCollection properties.
	 * @return {FeatureCollection} - The FeatureCollection instance.
	 * @static
	 * @example
	 * const featureCollection = FeatureCollection.fromJSON({
	 * 	type: 'FeatureCollection',
	 * 	features: [
	 * 		{
	 * 			type: 'Feature',
	 * 			geometry: {
	 * 				type: 'Point',
	 * 				coordinates: [100.0, 0.0]
	 * 			},
	 * 		},
	 * 	]
	 * });
	 */
	static fromJSON(json) {
		return new FeatureCollection(json.features, json.properties);
	}
}

export default FeatureCollection;
