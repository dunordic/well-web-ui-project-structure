import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

/**
 * Page component for rendering a standalone page. This is just
 * enforcing a singular child for a Page component
 *
 * @param {object} props
 * @param {React.ReactNode} props.children The react children of the Page. Can only be a singular value.
 * @param {string} props.path The path the children should be rendered on.
 */
export default function Page({ children, path }) {
  return <Route path={path}>{React.Children.only(children)}</Route>;
}

Page.propTypes = {
  children: PropTypes.node,
  path: PropTypes.string.isRequired
};
