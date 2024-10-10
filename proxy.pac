var FindProxyForURL = (function (init, profiles) {
  return function (url, host) {
    "use strict";
    var result = init,
      scheme = url.substr(0, url.indexOf(":"));
    do {
      result = profiles[result];
      if (typeof result === "function") result = result(url, host, scheme);
    } while (typeof result !== "string" || result.charCodeAt(0) === 43);
    return result;
  };
})("+proxy", {
  "+proxy": function (url, host, scheme) {
    "use strict";
    if (
      /^127\.0\.0\.1$/.test(host) ||
      /^::1$/.test(host) ||
      /^localhost$/.test(host) ||
      /^192\.168\./.test(host) ||
      /^172\.16\./.test(host) ||
      /^10\./.test(host) ||
      /\.snc-dev\.com$/.test(host) ||
      /\.snc-tools\.com$/.test(host) ||
      /\.localhost\.localstack\.cloud$/.test(host) ||
      /\.cibtunnel\.xyz$/.test(host) ||
      /\.snctest\.com$/.test(host)
    )
      return "DIRECT";
    return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
  },
});
