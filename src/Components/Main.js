import React from "react";
import ActualStories from "./ActualStories";
import LatestPhotos from "./LatestPhotos";
import "./Main.css";
import Taskbar from "./Taskbar";


function Main() {
  return (
    <div className="Main">
      <Taskbar />
      <ActualStories />
      <LatestPhotos />
     
    </div>
  );
}

export default Main;
