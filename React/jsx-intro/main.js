import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";

// Functional Component

function Component1() {
  const h1 = React.createElement(
    "h1",
    { id: "h1", className: "title", style: { color: "red" }, key: 23 },
    "Component 1 rendered"
  );
  const h2 = React.createElement("h2", { key: 14 }, "h2 rendered");

  const h3 = React.createElement("h3", { key: 22 }, "h3 rendered");

  return React.createElement(React.Fragment, { key: 31 }, [h1, h2, h3]);
}

function Component2() {
  const h1 = React.createElement(
    "h1",
    { id: "h1", style: { color: "blue" } },
    "Component 2 rendered"
  );
  const h2 = React.createElement("h2", {}, "h2 rendered");

  const h3 = React.createElement("h3", {}, "h3 rendered");

  return React.createElement(React.Fragment, {}, [h1, h2, h3]);
}

function Main() {
  return React.createElement(React.Fragment, {}, [
    Component1(),
    // Component2(),
    // Component1(),
    // React.createElement(
    //   "p",
    //   {},
    //   "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available"
    // ),
  ]);
}

console.log(Main());

const root = createRoot(document.querySelector("#app"));

function Component() {
  return (
    <>
      <h1 style={{ color: "red" }}>Component 1 rendered</h1>
      <h2>h2 rendered</h2>
      <h3>h3 rendered</h3>
    </>
  );
}

root.render(<Component />);

// setupCounter(document.querySelector("#counter"));

// jsx
