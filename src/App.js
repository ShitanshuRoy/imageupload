import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "./components/Provider";
import UserContainer from "./containers/UserContainer";
import FileContainer from "./containers/FileContainer";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/home" exact component={UserContainer} />
            <Route path="/repo/:id" exact component={FileContainer} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
