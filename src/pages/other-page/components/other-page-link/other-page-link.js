import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../../../styles/page-link-styles";

export default function OtherPageLink() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/">Go Home</Link>
    </div>
  );
}
