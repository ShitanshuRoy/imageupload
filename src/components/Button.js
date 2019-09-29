import React from "react";
import styles from "./Button.module.css";

export default class Button extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };
  render() {
    return (
      <div className={styles.base} onClick={this.handleClick}>
        {this.props.label}
      </div>
    );
  }
}
