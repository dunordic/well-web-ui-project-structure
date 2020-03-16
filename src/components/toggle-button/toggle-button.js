import React from "react";
import Button from "@material-ui/core/Button";

export default function HomeSplashButton(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <div style={{ textAlign: "center" }}>
      <Button variant="contained" color="primary" {...props} />
    </div>
  );
}
