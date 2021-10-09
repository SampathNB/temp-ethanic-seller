import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="main-warpper">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
