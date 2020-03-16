import React from "react";
import { Switch } from "react-router-dom";
import Page from "../components/page";
import Home from "./home";
import OtherPage from "./other-page";

/**
 * Pages represent standalone views however sub-pages can still be rendered in a page.
 * They represent a "page" or "template" in Atomic Design.
 * @see https://bradfrost.com/blog/post/atomic-web-design/#templates
 */
export default function Pages() {
  return (
    <Switch>
      <Page path="/other-page">
        <OtherPage />
      </Page>
      <Page path="/">
        <Home />
      </Page>
    </Switch>
  );
}
