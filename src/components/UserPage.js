import React from "react";

import RepoContainer from "../containers/RepoContainer";
import { getCookie } from "../utils/cookie";
import styles from "./UserPage.module.css";

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  //   authorize = async val => {
  //     return await this.props.authorize(val);
  //   };
  //   async componentDidMount() {
  //     console.log(getCookie("token"));

  //     if (
  //       getCookie("token") === undefined ||
  //       getCookie("token") === "undefined"
  //     ) {
  //       const token = await this.authorize(
  //         this.props.history.location.search.split("=")[1]
  //       );

  //       console.log(token);
  //     }
  //   }
  render() {
    if (this.state.loading) {
      return <a href={"lol"}>HELLO!!!</a>;
    } else {
      return <RepoContainer />;
    }
  }
}
