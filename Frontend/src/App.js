import Layout from "./Components/MainHeader/Layout";
import { Route, Switch } from "react-router-dom";
import HagiPage from "./Pages/HagiPage";
import BranzaPage from "./Pages/BranzaPage";
import ComaneciPage from "./Pages/ComaneciPage";
import HalepPage from "./Pages/HalepPage";
import AuthPage from "./Pages/AuthPage";

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/HagiPage">
            <HagiPage />
          </Route>
          <Route path="/HalepPage">
            <HalepPage />
          </Route>
          <Route path="/ComaneciPage">
            <ComaneciPage />
          </Route>
          <Route path="/BranzaPage">
            <BranzaPage />
          </Route>
          <Route path="/AuthPage">
            <AuthPage />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
