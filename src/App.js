import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./Component/Home";
import User from "./User";
import ListOfUsers from "./ListOfUsers";
import NavBar from "./Component/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ListOfUsers" component={ListOfUsers} />
        <Route path="/User/:id" render={(props) => <User {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
