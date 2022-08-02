/* eslint-disable */
// import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Create from "./Create/Create";
import BlogDetail from "./Create/BlogDetail";
import NotFound from "./NotFound/NotFound";
import Login from "./Sign-in/Login.js";
import RegisterForm from "./RegisterForm/RegisterForm";
//  App.js Root component
// Navbar.js Main.js these are included into App.js
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/create"}>
              <Create />
            </Route>
            <Route exact path={"/blogs/:id"}>
              <BlogDetail />
            </Route>
            <Route exact path="/sign-in">
              <Login />
            </Route>
            <Route exact path="/sign-up">
              <RegisterForm />
            </Route>
            <Route path={"*"}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
