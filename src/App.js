import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Fragment } from "react/cjs/react.production.min";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
