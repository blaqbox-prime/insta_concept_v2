import { Avatar, Card, IconButton } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import './Post.css';

function Post(props) {
    const randomNum = () => {
        return (Math.random()*1000).toFixed(0);
    }
    return (
        <div className="Post">
            <div className="card">
                <div className="d-flex justify-content-between post-header px-2 mb-2 align-items-center">
                    <div className="user-detail d-flex align-items-center">
                    <Avatar src={props.userAvatar} />
                        <p><strong>Lorem Ipsum</strong><br/>Bali_Indonesia</p>
                    </div>
                    <div className="right"><IconButton><MoreHoriz/></IconButton></div>
                </div>
                <img src={props.post} alt="" className="post-image shadow-sm"/>
            </div>
        </div>
    )
}

export default Post
