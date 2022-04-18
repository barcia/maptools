# MapTools

A set of GeoJSON tools

Read [GeoJSON Specification](https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.7)

## Getting Started

1.  Install the library:
    ```shell
    npm install maptools
    ```

2.  Import some utility in your JS code
    ```javascript
    import { Feature } from 'maptools'
    ```

3.  Create a new GeoJSON feature
    ```javascript
    const feature = new Feature('Point', [103.32, 34.21], { name: "Interesting point" })

    const geojsonFeature = feature.toJSON()
    ```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [Feature](#feature)
    *   [Parameters](#parameters)
    *   [Examples](#examples)
    *   [addProperty](#addproperty)
        *   [Parameters](#parameters-1)
        *   [Examples](#examples-1)
    *   [toJSON](#tojson)
        *   [Examples](#examples-2)
    *   [fromJSON](#fromjson)
        *   [Parameters](#parameters-2)
        *   [Examples](#examples-3)
*   [FeatureCollection](#featurecollection)
    *   [Parameters](#parameters-3)
    *   [Examples](#examples-4)
    *   [addFeatures](#addfeatures)
        *   [Parameters](#parameters-4)
        *   [Examples](#examples-5)
    *   [removeFeatures](#removefeatures)
        *   [Parameters](#parameters-5)
        *   [Examples](#examples-6)
    *   [toJSON](#tojson-1)
        *   [Examples](#examples-7)
    *   [fromJSON](#fromjson-1)
        *   [Parameters](#parameters-6)
        *   [Examples](#examples-8)
*   [Geometry](#geometry)
    *   [Parameters](#parameters-7)
    *   [Examples](#examples-9)
    *   [toJSON](#tojson-2)
        *   [Examples](#examples-10)
    *   [fromJSON](#fromjson-2)
        *   [Parameters](#parameters-8)
        *   [Examples](#examples-11)
    *   [validate](#validate)
        *   [Parameters](#parameters-9)
        *   [Examples](#examples-12)
*   [GeometryCollection](#geometrycollection)
    *   [Parameters](#parameters-10)
    *   [Examples](#examples-13)
    *   [addGeometries](#addgeometries)
        *   [Parameters](#parameters-11)
        *   [Examples](#examples-14)
    *   [toJSON](#tojson-3)
        *   [Examples](#examples-15)
    *   [fromJSON](#fromjson-3)
        *   [Parameters](#parameters-12)
        *   [Examples](#examples-16)

### Feature

Create a GeoJSON Feature.

#### Parameters

*   `type` **(`"Point"` | `"LineString"` | `"Polygon"` | `"MultiPoint"` | `"MultiLineString"` | `"MultiPolygon"`)** The Feature type.
*   `coords` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Feature coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
*   `props` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The Feature properties.

#### Examples

```javascript
const feature = new Feature('Point', [105.0, 4.0], { name: 'foo' });
```

#### addProperty

Add a new property to the Feature or update an existing one.

##### Parameters

*   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The property key.
*   `value` **any** The property value.

##### Examples

```javascript
feature.addProperty('desc', 'bar');
```

#### toJSON

Return the Feature object.

##### Examples

```javascript
feature.toJSON();
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The Feature object

#### fromJSON

Create a Feature instance from a GeoJSON feature object.

##### Parameters

*   `json` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A valid GeoJSON feature object.

    *   `json.type` **(`"Feature"`)** The feature type.
    *   `json.geometry` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A valid GeoJSON geometry.

        *   `json.geometry.type` **(`"Point"` | `"LineString"` | `"Polygon"` | `"MultiPoint"` | `"MultiLineString"` | `"MultiPolygon"`)** The Feature geometry type.
        *   `json.geometry.coordinates` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Feature coordinates with the format `[lon, lat, alt]`, while `alt` is optional.
    *   `json.properties` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The Feature properties.

##### Examples

```javascript
const feature = Feature.fromJSON({
	type: 'Feature',
	geometry: {
		type: 'Point',
		coordinates: [105.0, 4.0]
	},
	properties: {
		name: 'foo'
	}
});
```

Returns **[Feature](#feature)** The Feature instance.

### FeatureCollection

Create a FeatureCollection.

#### Parameters

*   `features` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The FeatureCollection features array.
*   `props` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The FeatureCollection properties.

#### Examples

```javascript
const featureCollection = new FeatureCollection([
	new Feature('Point', [100.0, 0.0]).toJSON(),
	new Feature('Point', [101.0, 1.0]).toJSON()
], { name: 'foo' });
```

#### addFeatures

Add new features to the FeatureCollection.

##### Parameters

*   `features` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array with Features to add.

##### Examples

```javascript
featureCollection.addFeatures([
	new Feature('Point', [103.0, 7.0]).toJSON(),
]);
```

#### removeFeatures

Remove features from the FeatureCollection.

##### Parameters

*   `func` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** The function to filter the features to remove. Uses native JS `Array.filter()` method.
*   `dryrun` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** IF true, return the features to remove but don't remove them. (optional, default `false`)

##### Examples

```javascript
featureCollection.removeFeatures(feature => feature.properties.name === 'foo');
```

#### toJSON

Return the FeatureCollection object.

##### Examples

```javascript
featureCollection.toJSON();
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The FeatureCollection object

#### fromJSON

Create a FeatureCollection instance from a GeoJSON featureCollection object.

##### Parameters

*   `json` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A valid GeoJSON featureCollection object.

    *   `json.type` **(`"FeatureCollection"`)** The featureCollection type.
    *   `json.features` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** An array of features.
    *   `json.properties` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)?** The FeatureCollection properties.

##### Examples

```javascript
const featureCollection = FeatureCollection.fromJSON({
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [100.0, 0.0]
			},
		},
	]
});
```

Returns **[FeatureCollection](#featurecollection)** The FeatureCollection instance.

### Geometry

Create a GeoJSON Geometry.

#### Parameters

*   `type` **(`"Point"` | `"LineString"` | `"Polygon"` | `"MultiPoint"` | `"MultiLineString"` | `"MultiPolygon"`)** The Geometry type.
*   `coords` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Geometry coordinates with the format `[lon, lat, alt]`, while `alt` is optional.

#### Examples

```javascript
const geometry = new Geometry('Point', [105.0, 4.0]);
```

#### toJSON

Return the Geometry object.

##### Examples

```javascript
// { type: 'Point', coordinates: [105.0, 4.0] }
geometry.toJSON();
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The Geometry object

#### fromJSON

Create a Geometry instance from a GeoJSON geometry object.

##### Parameters

*   `json` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A valid GeoJSON geometry object.

    *   `json.type` **(`"Point"` | `"LineString"` | `"Polygon"` | `"MultiPoint"` | `"MultiLineString"` | `"MultiPolygon"`)** The Geometry type.
    *   `json.coordinates` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Geometry coordinates with the format `[lon, lat, alt]`, while `alt` is optional.

##### Examples

```javascript
const geometry = Geometry.fromJSON({
		type: 'Point',
		coordinates: [105.0, 4.0]
	});
```

Returns **[Geometry](#geometry)** The Geometry instance.

#### validate

Validate a Geometry.

##### Parameters

*   `type` **(`"Point"` | `"LineString"` | `"Polygon"` | `"MultiPoint"` | `"MultiLineString"` | `"MultiPolygon"`)** The Geometry type.
*   `coords` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The Geometry coordinates with the format `[lon, lat, alt]`, while `alt` is optional.

##### Examples

```javascript
const isValidPoint = Geometry.validate({
		type: 'Point',
		coordinates: [105.0, 4.0]
	});
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** True if the Geometry is valid, false otherwise.

### GeometryCollection

Create a GeometryCollection.

#### Parameters

*   `geometries` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The GeometryCollection features array.

#### Examples

```javascript
const geometryCollection = new GeometryCollection([
	new Geometry('Point', [100.0, 0.0]).toJSON(),
	new Geometry('Point', [101.0, 1.0]).toJSON()
]);
```

#### addGeometries

Add new geometries to the GeometryCollection.

##### Parameters

*   `geometries` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** The array with geometries to add.

##### Examples

```javascript
geometryCollection.addGeometries([
	new Geometry('Point', [103.0, 7.0]).toJSON(),
]);
```

#### toJSON

Return the GeometryCollection object.

##### Examples

```javascript
geometryCollection.toJSON();
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** The GeometryCollection object

#### fromJSON

Create a GeometryCollection from a GeoJSON geometryCollection object.

##### Parameters

*   `json` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** A valid GeoJSON geometryCollection object.

    *   `json.type` **(`"GeometryCollection"`)** The geometryCollection type.
    *   `json.geometries` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** An array of geometries.

##### Examples

```javascript
const geometryCollection = GeometryCollection.fromJSON({
	type: 'GeometryCollection',
	geometries: [
		{
			type: 'Point',
			coordinates: [100.0, 0.0]
		},
		{
			type: 'Point',
			coordinates: [101.0, 1.0]
		}
	]
});
```

Returns **[GeometryCollection](#geometrycollection)** The GeometryCollection instance.
