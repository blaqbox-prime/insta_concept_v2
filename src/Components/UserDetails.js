import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./UserDetails.css";

function UserDetails() {

  return (
    <div className="UserDetails">
      <Avatar src="https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_960_720.jpg" className="avatar" />
      <h2 id="user-full-name">Lauren Hill</h2>
      <h5 id="username">{"@LaurenHill"}</h5>
      <p id="bio">
        {`my name is Lauren, I'm a professional portrait photographer based in australia`}
      </p>
      <div className="container-fluid">
        <div className="row text-center">
          <div id="posts" className="col">
            <h5 id="post-count">25</h5>
            <h5>Posts</h5>
          </div>
          <div id="followers" className="col">
            <h5 id="followers-count">261k</h5>
            <h5>Followers</h5>
          </div>
          <div id="following" className="col">
            <h5 id="Following-count">674</h5>
            <h5>Following</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
