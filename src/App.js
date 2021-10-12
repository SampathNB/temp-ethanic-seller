import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Listing from "./Pages/Listing/Listing";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="main-warpper w-100">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/listing" component={Listing} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
