import { Fragment } from "react";
import NavBar from "./MainHeader/NavBar";
import { Route } from "react-router-dom";
import PHagi from "./Pages/PHagi/PHagi";
import PBranza from "./Pages/PBranza/PBranza";
import PComaneci from "./Pages/PComaneci/PComaneci";
import PHalep from "./Pages/PHalep/PHalep";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Route path="/PHagi">
        <PHagi />
      </Route>
      <Route path="/PHalep">
        <PHalep />
      </Route>
      <Route path="/PComaneci">
        <PComaneci />
      </Route>
      <Route path="/PBranza">
        <PBranza />
      </Route>
    </Fragment>
  );
}

export default App;
