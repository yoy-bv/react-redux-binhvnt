/* eslint-disable */
import { reduce, isArray, isFunction } from 'lodash';

export const decodePath = (path) => {
  const arr = path.split('/');
  arr.shift();
  return arr;
};

export const json2Form = (jsonObj) => reduce(
  jsonObj,
  (result, item, key) => {
    result.append(key, item);
    return result;
  }, new FormData(),
);

export const isFunc = isFunction;
export { isArray };
export const isArrayHasItem = (items) => isArray(items) && items.length;
export const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function(p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !window.safari ||
      (typeof window.safari !== 'undefined' && window.safari.pushNotification),
  );
