import * as api from "../utils/api";
import * as cookie from "../utils/cookie";
const CLIENT_ID = "2fcac0a388968a6f96a0";
const CLIENT_SECRET = "6c3213c7dc9d5412f41e350e3f37e477b0008096";
// const redirect_url = "http://localhost:3003/home";
export async function authorize(code) {
  console.log(code);
  try {
    //https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token
    const url = `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`;
    const result = await api.post(url, null, true);
    console.log(result);
    cookie.createCookie("token", result.access_token);
    return result;
  } catch (error) {
    return { error };
  }
}

export async function getUser() {
  try {
    const url = `user`;
    const result = await api.get(url);
    cookie.createCookie("user", result.login);
    console.log(result);
    return result;
  } catch (error) {
    return { error };
  }
}

export async function submitUserResult(data) {
  try {
    const url = "submitAssesmentRecord";
    const result = await api.post(url, data);
    return result;
  } catch (error) {
    return error;
  }
}
