import React from "react";
const ProviderContext = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  update = val => {
    this.setState({ ...val });
  };
  render() {
    return (
      <ProviderContext.Provider
        value={{
          update: this.update,
          ownProps: this.props,
          ...this.state
        }}
      >
        {this.props.children}
      </ProviderContext.Provider>
    );
  }
}
export class Consumer extends React.Component {
  render() {
    return (
      <ProviderContext.Consumer>
        {store => this.props.children(store)}
      </ProviderContext.Consumer>
    );
  }
}
