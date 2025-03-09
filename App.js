const heading = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "heading1" }, "This is a Heading 1"),
  React.createElement("h2", { id: "heading2" }, "This is a Heading 2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
