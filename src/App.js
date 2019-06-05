import React from "react";
import "./App.css";
import { Auth } from "./Components/Auth/Auth";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Form } from "./Components/Form/Form";
import { Post } from "./Components/Post/Post";
import { HashRouter } from "react-router-dom";
import { Nav } from "./Components/Nav/Nav";
import routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
