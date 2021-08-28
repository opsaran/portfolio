import Navbar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./components/Description";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Description />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
