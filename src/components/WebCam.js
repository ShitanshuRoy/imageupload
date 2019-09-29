import React from "react";
import Webcam from "react-webcam";
import Button from "./Button";
import styles from "./WebCam.module.css";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = props => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    if (props.onCapture) {
      props.onCapture(imageSrc);
    }
  }, [webcamRef]);

  return (
    <div className={styles.base}>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />

      <Button onClick={capture} label="Capture photo" />
    </div>
  );
};
export default WebcamCapture;
