import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages";

/**
 * Overall App layout happens here, like a navbar, sidebar,
 * footer, etc.
 *
 * This is where you would do Application-level layouts. If you find multiple
 * pages rendering the layouts, it should probably be centralized here.
 *
 * Note that you don't have access to params or routes at this point. Only
 * child components of App will have access to these values, since the `Router`
 * is instantiated here.
 */
export default function App() {
  return (
    <>
      <header>
        <nav>This is a navbar</nav>
      </header>
      <Router>
        <Pages />
      </Router>
      <footer>This is a footer</footer>
    </>
  );
}
