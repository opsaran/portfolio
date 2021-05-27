import Navbar from "./navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./Description";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="home">
          <Switch>
            <Route path="/navbar">
              <Navbar />
            </Route>
            <Route>
              <Description />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
