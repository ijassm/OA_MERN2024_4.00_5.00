import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";

// console.log(React);
// const h1 = React.createElement(
//   "h1",
//   { id: "h1", style: { color: "red" } },
//   "h1 rendered"
// );
// const h2 = React.createElement("h2", {}, "h2 rendered");

// const h3 = React.createElement("h3", {}, "h3 rendered");

// const main = React.createElement(React.Fragment, {}, [h1, h2, h3]);

// const h1 = document.createElement("h1");

console.log(main);

// console.log(h1);
// console.log(h2);

const root = createRoot(document.querySelector("#app"));

root.render(main);

// setupCounter(document.querySelector("#counter"));
