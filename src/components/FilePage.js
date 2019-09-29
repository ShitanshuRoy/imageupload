import React from "react";
import WebCam from "./WebCam";
import Button from "./Button";
import * as cookie from "../utils/cookie";
import { uploadFile } from "../apiRequests/repos";
import jpeg from "../images/jpeg.svg";
import svg from "../images/svg.svg";
import png from "../images/png.svg";

import css from "../images/css.svg";
import folder from "../images/folder.svg";
import html from "../images/html.svg";

import js from "../images/javascript.svg";
import pdf from "../images/pdf.svg";
import json from "../images/json.svg";
import txt from "../images/txt.svg";
import doc from "../images/doc.svg";
import file from "../images/file.svg";
import styles from "./FilePage.module.css";

export default class FilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: null
    };
  }
  handleCapture = val => {
    this.setState({ previewImage: val });
  };
  handleUpload = () => {
    uploadFile(
      cookie.getCookie("user"),
      this.props.history.location.pathname.split("/")[2],
      "newimage.jpg",
      {
        message: "uploading new image",
        branch: "master",
        content: this.state.previewImage
      }
    );
  };
  render() {
    const imageMapping = {
      svg,
      png,
      css,
      folder,
      html,
      js,
      pdf,
      json,
      txt,
      doc,
      jpeg,
      jpg: jpeg,
      file
    };
    console.log(this.props);
    return (
      <>
        <div className={styles.base}>
          <div className={styles.content}>
            {this.props.files &&
              this.props.files
                .sort((a, b) => {
                  return a.type.charCodeAt(0) - b.type.charCodeAt(0);
                })
                .map(val => (
                  <div className={styles.card}>
                    <div
                      className={styles.icon}
                      style={{
                        backgroundImage: `url(${
                          val.type === "dir"
                            ? imageMapping["folder"]
                            : imageMapping[
                                val.name.split(".")[
                                  val.name.split(".").length - 1
                                ]
                              ]
                            ? imageMapping[
                                val.name.split(".")[
                                  val.name.split(".").length - 1
                                ]
                              ]
                            : imageMapping["file"]
                        })`
                      }}
                    />
                    <div className={styles.name}>{val.name}</div>
                  </div>
                ))}
          </div>
          <WebCam onCapture={this.handleCapture} />
        </div>
        {this.state.previewImage && (
          <div className={styles.preview}>
            <div className={styles.popUp}>
              <div
                className={styles.close}
                onClick={() => {
                  this.setState({ previewImage: null });
                }}
              >
                X
              </div>
              <img src={this.state.previewImage} alt=""></img>
              <div className={styles.button}>
                <Button label="Upload" onClick={this.handleUpload} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
