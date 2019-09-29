import React from "react";
import { Consumer } from "../components/Provider";
import { withRouter } from "react-router";
import { getCookie } from "../utils/cookie";
import { authorize, getUser } from "../apiRequests/auth";
import UserPage from "../components/UserPage";

class ProfileContainer extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {
          return (
            <UserPageWithState
              {...this.props}
              history={this.props.history}
              update={props.update}
              assessments={props.assessments}
              user={props.user}
            />
          );
        }}
      </Consumer>
    );
  }
}
class UserPageWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  authorize = async val => {
    return await this.props.authorize(val);
  };
  async componentDidMount() {
    console.log(getCookie("token"));

    if (
      getCookie("token") === undefined ||
      getCookie("token") === "undefined"
    ) {
      const token = await authorize(
        this.props.history.location.search.split("=")[1]
      );

      console.log(token);
    }
    const userData = await getUser();
    console.log(userData);
    this.props.update({ user: userData.login });
  }

  render() {
    if (true) {
      return (
        <UserPage
          history={this.props.history}
          user={this.props.user}
          //   authorize={authorize}
          update={this.props.update}
        />
      );
    } else {
      return <div />;
    }
  }
}

export default withRouter(ProfileContainer);
