import { render } from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
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
