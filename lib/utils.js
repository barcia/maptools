export const isFunction = value => value && (Object.prototype.toString.call(value) === "[object Function]" || "function" === typeof value || value instanceof Function);
export const isObject = value => value && typeof value === 'object' && !Array.isArray(value);
export const isString = value => value && typeof value === 'string';
export const isArray = value => value && Array.isArray(value);
export const isNumber = value => typeof value === 'number';
