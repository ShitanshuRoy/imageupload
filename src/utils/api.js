// app.get("/login", (req, res, next) => {
//   // generate that csrf_string for your "state" parameter
//   req.session.csrf_string = randomString.generate();
//   // construct the GitHub URL you redirect your user to.
//   // qs.stringify is a method that creates foo=bar&bar=baz
//   // type of string for you.
//   const githubAuthUrl =
//     "https://github.com/login/oauth/authorize?" +
//     qs.stringify({
//       client_id: process.env.CLIENT_ID,
//       redirect_uri: redirect_uri,
//       state: req.session.csrf_string,
//       scope: "user:email"
//     });
//   // redirect user with express
//   res.redirect(githubAuthUrl);
// });

import * as Cookie from "./cookie";
// import { TOKEN } from "./constants";

let API_URL_ROOT = "https://cors-anywhere.herokuapp.com/https://api.github.com";
// if (process.env.REACT_APP_STAGE === "development") {
//   API_URL_ROOT = "https://staging-api.agebold.com/api";
// } else if (process.env.REACT_APP_STAGE === "production") {
//   API_URL_ROOT = "https://api.agebold.com/api";
// } else if (process.env.REACT_APP_STAGE === "local") {
//   API_URL_ROOT = "https://staging-api.agebold.com/api";
// } else if (process.env.REACT_APP_STAGE === "beta") {
//   API_URL_ROOT = "https://api.agebold.com/api";
// }

//Replace this when we deploy it

export async function get(url) {
  const token = Cookie.getCookie("token") ? Cookie.getCookie("token") : null;
  console.log(token);
  const result = await fetch(`${API_URL_ROOT}/${url}`, {
    headers: {
      //   token,
      Authorization: `token ${token}`,
      //   "cache-control": "no-cache",
      "content-type": "application/json",

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
      "Access-Control-Expose-Headers":
        "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
      "Access-Control-Max-Age": 86400,
      Accept: "application/json"
    }
  });
  const resultJson = await result.json();
  return resultJson;
}

export async function post(path, postData, ignorePath) {
  const url = ignorePath ? `${path}` : `${API_URL_ROOT}/${path}`;
  const token = Cookie.getCookie("token") ? Cookie.getCookie("token") : null;
  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
      "Access-Control-Expose-Headers":
        "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
      "Access-Control-Max-Age": 86400,
      Accept: "application/json"
    }
  });
  const resultJson = await result.json();
  return resultJson;
}

export async function put(path, putData) {
  const url = `${API_URL_ROOT}/${path}`;
  const token = Cookie.getCookie("token") ? Cookie.getCookie("token") : null;
  console.log(JSON.stringify(putData));
  const result = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(putData),
    headers: {
      Authorization: `token ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE",
      "Access-Control-Expose-Headers":
        "ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval",
      "Access-Control-Max-Age": 86400,
      "X-OAuth-Scopes": "repo, user",
      "X-Accepted-OAuth-Scopes": "repo",
      Accept: "application/json",

      "Content-Type": "application/json"
    }
  });
  const resultJson = await result.json();
  return resultJson;
}
