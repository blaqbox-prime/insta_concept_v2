import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import ContentFeed from "./Components/ContentFeed";
import Main from "./Components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3">
          <Profile />
        </div>
        <div className="col-6">
          <Main />
        </div>
        <div className="col-3">
          <ContentFeed className="col-sm" />
        </div>
      </div>
    </div>
  );
}

export default App;
