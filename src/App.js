import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import routes from "./components/routes";
import Dashboard from "./pages/Dashboard";
import Landing from './pages/Landing'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {routes.map((route) => {
          const Component = route.component
          return (
            <Route
              key={route.url}
              path={route.url}
              element={<Dashboard children={<Component />} />}
            />
          )
        })}
      </Routes>
    </Router>
  );
}

export default App;
