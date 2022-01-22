import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Fragment, useState } from "react/cjs/react.production.min";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
