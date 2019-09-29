import React from "react";
import styles from "./RepoPage.module.css";

export default class RepoPage extends React.Component {
  handleClick = val => {
    this.props.history.push(`/repo/${val}`);
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.base}>
        <div className={styles.content}>
          {this.props.repos &&
            this.props.repos.map(val => (
              <div
                className={styles.card}
                onClick={() => this.handleClick(val.name)}
              >
                <div className={styles.name}>{val.name}</div>
                <div className={styles.row}>
                  <span className={styles.label}>Forks: {val.forks}</span>
                  <span className={styles.label}>
                    Open issues: {val.open_issues}
                  </span>
                  <span className={styles.label}>Watchers: {val.watchers}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
