import axios from "axios";

const BASE_URL = "https://marathonstore-backend.herokuapp.com";

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function postLogIn(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}

export { postSignUp, postLogIn };
