
import React from 'react'
import './MyStory.css';

function MyStory(props) {
    return (
        <div className="MyStory">
              <img src={props.image} alt="" className="avatar"/>
              <p className="story-name">{props.title}</p>
        </div>
    )
}

export default MyStory
