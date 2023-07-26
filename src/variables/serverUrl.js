let apiUrl = "http://localhost:5050/adm/";
let serverUrl = "http://localhost:5050/";
if (window.location.href.includes("greentalk")) {
  apiUrl = "https://api.greentalk.kr/adm/";
  serverUrl = "https://api.greentalk.kr/";
} else if (window.location.href.includes("gl-iot")) {
  apiUrl = "https://gl-iot-api.wizclass.kr/adm/";
  serverUrl = "https://gl-iot-api.wizclass.kr/";
}

export { apiUrl, serverUrl };
