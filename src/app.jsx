import Maker from "components/maker/maker";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import "./app.module.css";
import Login from "./components/login/login";
import styles from "./app.module.css";

function App({authService, ImageFileInput, cardRepository}) {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Login authService={authService} />
          </Route>
          <Route exact path='/maker'>
            <Maker
              authService={authService}
              ImageFileInput={ImageFileInput}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
export default App;
