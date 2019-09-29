import React from "react";
import styles from "./UserPage.module.css";
const CLIENT_ID = "2fcac0a388968a6f96a0";

const redirect_url = "http://localhost:3000/home";
const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_url}`;
export default class UserPage extends React.Component {
  login = async () => {
    await this.props.login();
  };
  render() {
    return <a href={url}>HELLO!!!</a>;
  }
}
