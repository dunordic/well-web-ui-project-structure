import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../../../../styles/page-link-styles";

export default function HomeLink() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/other-page/😉">Go to other page</Link>
    </div>
  );
}
