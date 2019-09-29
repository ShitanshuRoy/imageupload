import React from "react";
import { Consumer } from "../components/Provider";
import { withRouter } from "react-router";
import RepoPage from "../components/RepoPage";
import { getRepos } from "../apiRequests/repos";
class RepoContainer extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {
          return (
            <RepoPageWithState
              {...this.props}
              history={this.props.history}
              update={props.update}
              assessments={props.assessments}
              repos={props.repos}
            />
          );
        }}
      </Consumer>
    );
  }
}
class RepoPageWithState extends React.Component {
  componentDidMount() {
    // const userId = Cookie.getCookie(UID) ? Cookie.getCookie(UID) : null;

    this.getRepos();
  }
  getRepos = async () => {
    const repos = await getRepos();
    console.log(repos);
    this.props.update({ repos });
  };
  render() {
    return (
      <RepoPage
        history={this.props.history}
        repos={this.props.repos}
        update={this.props.update}
      />
    );
  }
}

export default withRouter(RepoContainer);
