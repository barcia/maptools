import { GEOMETRY_TYPES, GEOJSON_TYPES } from './constants.js';
import { isArray, isNumber } from './utils.js';

const isValidPoint = (coords) => {
	if (
		isArray(coords)
		&& (coords.length === 2 || coords.length === 3)
		&& coords.every(isNumber)
	) return true;
	return false
};

const isValidLineString = (coords) => {
	if (
		isArray(coords)
		&& (coords.length > 1)
		&& coords.every(isValidPoint)
	) return true;
	return false
};

const isValidPolygon = (coords) => {
	if (
		isArray(coords)
		&& (coords.length >= 1)
		&& coords.every(isValidLineString)
	) return true;
	return false
};

const isValidMultiPoint = (coords) => {
	if (
		isArray(coords)
		&& (coords.length >= 1)
		&& coords.every(isValidPoint)
	) return true;
	return false
};

const isValidMultiLineString = (coords) => {
		if (
		isArray(coords)
		&& (coords.length >= 1)
		&& coords.every(isValidLineString)
	) return true;
	return false
};

const isValidMultiPolygon = (coords) => {
	if (
		isArray(coords)
		&& (coords.length >= 1)
		&& coords.every(isValidPolygon)
	) return true;
	return false
};

const VALIDATIONS_MAP = {
	'Point': isValidPoint,
	'LineString': isValidLineString,
	'Polygon': isValidPolygon,
	'MultiPoint': isValidMultiPoint,
	'MultiLineString': isValidMultiLineString,
	'MultiPolygon': isValidMultiPolygon,
};

export const isGeometryType = type => GEOMETRY_TYPES.includes(type);

export const isGeoJSONType = type => GEOJSON_TYPES.includes(type);

export const isValidGeometry = (type, coords) => {
	return isGeometryType(type)
	? VALIDATIONS_MAP[type](coords)
	: false;
}
