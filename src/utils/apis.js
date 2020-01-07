import axios from "axios";

let baseurl = {
  live: "https://zbag.herokuapp.com/api",
  local: "http://localhost:8080/api"
};

const SignUpApi = (data = {}) => {
  return axios
    .post(`${baseurl.live}/user/register`, data)
    .then(result => result.data)
    .catch(err => err);
};

const LoginApi = (data = {}) => {
  return axios
    .post(`${baseurl.local}/user/login`, data)
    .then(result => result.data)
    .catch(err => err);
};

export { SignUpApi, LoginApi };
