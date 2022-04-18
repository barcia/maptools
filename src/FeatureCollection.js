

class FeatureCollection {
    /**
     * Create a FeatureCollection.
     * @param {Array} features - The FeatureCollection Features array.
     * @param {object} props - The FeatureCollection properties.
     */
	constructor(features, props) {
		this.features = features;
		this.props = props;

		this.element = this.#createFeatureCollection(this.features, this.props);
	}

	/**
	 * Create a valid GeoJSON FeatureCollection
	 * @returns {Object} GeoJSON FeatureCollection
	 * @private
	 */
	#createFeatureCollection(features, props) {
		const element = {
			type: 'FeatureCollection',
			features: features || [],
			properties: props || {}
		}

		return element
	}

	/**
	 * Add new Features to the FeatureCollection.
	 * @param {Array} features - The array with Features to add.
	 */
	addFeatures(features) {
		this.features.push(...features)
	}

	/**
	 * Remove Features from the FeatureCollection.
	 * @param {Function} func - The function to filter the Features to remove.
	 * @param {boolean} dryrun - IF true, return the Features to remove but don't remove them.
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
	 * @returns {object} - The FeatureCollection object
	 */
	toJSON() {
		return this.element
	}

	static fromJSON(json) {
		return new FeatureCollection(json.features, json.properties);
	}
}

export default FeatureCollection;
