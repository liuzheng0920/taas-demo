"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fetchclient = async function (url, data, method) {
  const response = await (0, _nodeFetch.default)(url, {
    body: JSON.stringify(data),
    cache: "no-cache",
    headers: {
      'content-type': 'application/json'
    },
    mode: "cors",
    method: method
  });
  return await response.json();
};

var _default = fetchclient;
exports.default = _default;