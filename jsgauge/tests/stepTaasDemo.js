'use strict';

var _fetchclient = _interopRequireDefault(require("./util/fetchclient"));

var _assert = _interopRequireDefault(require("assert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const data = {
  username: "liuzheng",
  password: "123456"
};
step("发送接口 <url>", async url => {
  const respData = await (0, _fetchclient.default)(url, data, "POST");

  _assert.default.strictEqual(respData.email, "123@ceb.com");
});