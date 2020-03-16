import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import OtherPageSalutation from "./components/other-page-salutation";
import OtherPageLink from "./components/other-page-link";
import SubView from "./sub-view";

/**
 * `OtherPageSalutation` and `OtherPageLink` are complex components that are specific
 * to this page/view. They represent "organisms" in Atomic Design.
 *
 * @see https://bradfrost.com/blog/post/atomic-web-design/#organisms
 */

export default function OtherPage() {
  const { url } = useRouteMatch();
  return (
    <>
      <OtherPageSalutation />
      <OtherPageLink />
      <Route path={`${url}/:subViewParam`}>
        <SubView />
      </Route>
    </>
  );
}
