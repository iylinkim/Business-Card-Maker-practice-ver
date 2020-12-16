import Maker from "components/maker/maker";
import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import "./app.module.css";
import Login from "./components/login/login";

// function App({authService}) {
//   return (
//     <HashRouter>
//       <Switch>
//         <Route exact path="/">
//           <Login authService={authService}/>
//         </Route>
//         <Route exact path="/maker">
//           <Maker authService={authService}/>
//         </Route>
//       </Switch>
//     </HashRouter>
//   );
// }

// export default App;

function App({authService}) {
  return <HashRouter>
      <Switch>
          <Route exact path="/">
              <Login authService={authService}/>
          </Route>
          <Route exact path="/maker">
              <Maker authService={authService}/>
          </Route>
      </Switch>
  </HashRouter>
}
export default App;
