import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import useFocusOnMount from "./use-focus-on-mount";
import useStyles from "./salutation.styles";

export default function Salutation({ children, isGreeting = true }) {
  const focusHeadingRef = useFocusOnMount();
  const classes = useStyles();
  return (
    <div>
      <Typography
        classes={{ root: classes.root }}
        gutterBottom
        variant="h1"
        ref={focusHeadingRef}
      >
        {isGreeting ? "Hello" : "GoodBye"} {children}
      </Typography>
    </div>
  );
}

Salutation.propTypes = {
  children: PropTypes.node,
  isGreeting: PropTypes.bool
};
