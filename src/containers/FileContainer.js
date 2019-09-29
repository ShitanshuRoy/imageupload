import React from "react";
import { withRouter } from "react-router";
import { Consumer } from "../components/Provider";
import * as cookie from "../utils/cookie";
import FilePage from "../components/FilePage";
import { getRepoContent } from "../apiRequests/repos";
class FileContainer extends React.Component {
  render() {
    return (
      <Consumer>
        {props => (
          <FilePageWithState
            history={this.props.history}
            update={props.update}
            files={props.files}
            user={props.user}
          ></FilePageWithState>
        )}
      </Consumer>
    );
  }
}

class FilePageWithState extends React.Component {
  componentDidMount() {
    console.log(this.props.history.location.pathname.split("/")[2]);
    this.getRepoContent(this.props.history.location.pathname.split("/")[2]);
  }
  componentWillUnmount() {
    this.props.update({ files: null });
  }
  getRepoContent = async val => {
    console.log(this.props.user);
    const files = await getRepoContent(cookie.getCookie("user"), val);
    this.props.update({ files });
  };
  render() {
    return <FilePage files={this.props.files} history={this.props.history} />;
  }
}
export default withRouter(FileContainer);
