const server = "hettp://123.123.123.123:2000";
const testParams = {
  name: "nameyese",
  password: "passwords"
};

function toUrl(url, params) {
  let paramsArr = [];
  if (params) {
    Object.keys(params).forEach(item => {
      paramsArr.push(item + "=" + params[item]);
    });
    if (url.search(/\?/) === -1) {
      url += "?" + paramsArr.join("&");
    } else {
      url += "&" + paramsArr.join("&");
    }
  }
  console.log(url);
  // hettp://123.123.123.123:2000?name=nameyese&password=passwords
}

toUrl(server, testParams)