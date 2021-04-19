
import { Button, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Edit, Favorite, Home, Whatshot } from '@material-ui/icons';
import React from 'react'
import './Profile.css';
import UserDetails from './UserDetails';

function Profile() {
     
    return (
        <div className="Profile container"> 
            <div className="d-flex align-items-center insta-title justify-content-center">
                <h1>Instagram</h1>
            </div>
            {/* //User Section */}
            <UserDetails />
            <List>
                {/* Feed */}
        <ListItem button>
            <ListItemIcon> <Home color="disabled"/> </ListItemIcon>
            <ListItemText primary="Feed"/>
        </ListItem>
        {/* interesting */}
        <ListItem button>
            <ListItemIcon> <Whatshot color="disabled"/> </ListItemIcon>
            <ListItemText primary="Interesting"/>
        </ListItem>
        {/* Activity */}
        <ListItem button>
            <ListItemIcon> <Favorite color="disabled"/> </ListItemIcon>
            <ListItemText primary="Activity"/>
        </ListItem>
        {/* edit profile */}
        <ListItem button>
            <ListItemIcon> <Edit color="disabled"/> </ListItemIcon>
            <ListItemText primary="Edit profile"/>
        </ListItem>
            </List>

            <Button className="grad" fullWidth="true" id="btn-new-post">Create New Post</Button>
            <div className="row text-center">
            <p id="new-story-btn">or Create New Story</p>
            </div>
        </div>
        
    )
}

export default Profile
