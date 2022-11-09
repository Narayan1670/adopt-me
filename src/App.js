import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Aloo",
//       animal: "Cat",
//       breed: "Tabby",
//     }),
//     React.createElement(Pet, {
//       name: "Peanut",
//       animal: "Dog",
//       breed: "pitbull",
//     }),
//     React.createElement(Pet, {
//       name: "luci",
//       animal: "Dog",
//       breed: "persian",
//     }),
//   ]);
// };

render(<App />, document.getElementById("root"));
