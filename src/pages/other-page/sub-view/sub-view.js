import React from "react";
import Typography from "@material-ui/core/Typography";
import SubViewMessage from "../components/sub-view-message";

/**
 * A sub- view/page, similar to a `page`, represent an Atomic Design "organism".
 * They're most likely going to be smaller than a `page`, but they are often
 * going to be complex components made up of smaller constituent components.
 */
export default function SubView() {
  return (
    <div>
      You've reached the sub view!
      <Typography variant="h3">
        <SubViewMessage />
      </Typography>
    </div>
  );
}
