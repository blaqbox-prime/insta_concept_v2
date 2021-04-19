import React from 'react'

import './ContentFeed.css';
import Feed from './Feed';
import Stories from './Stories';


function ContentFeed() {
    return (
        <div className="ContentFeed"> 
        <Stories/>
                    <Feed/>
           
        </div>
    )
}

export default ContentFeed
