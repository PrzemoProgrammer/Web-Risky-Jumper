const SERVER_URL = "https://personalserver-c0422f9a9869.herokuapp.com"; //"http://localhost:8081"; //"https://riskyjumper.cyclic.app";
const PREFX = "riskyJumperWeb";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const requestPost = (data, url) => {
  return fetch(`${SERVER_URL}/${url}`, {
    method: "post",
    headers: headers,
    body: JSON.stringify(data),
  });
};

const requestGet = (url) => {
  return fetch(`${SERVER_URL}/${url}`, {
    headers: headers,
  });
};

const CREATE_ACCOUNT = (data) => {
  return requestPost(data, `${PREFX}/createAccount`);
};

const GET_PLAYERS = () => {
  return requestGet(`${PREFX}/playersStatus`);
};

const UPDATE_SCORE = (data) => {
  return requestPost(data, `${PREFX}/updateScore`);
};
