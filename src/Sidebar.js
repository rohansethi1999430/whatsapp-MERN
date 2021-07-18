import React from 'react'
import './Sidebar.css'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
               <Avatar src='https://wallpapercave.com/wp/wp1817006.jpg'></Avatar>
               <div className="sidebar__headerRight">
                <IconButton>
               
                <DonutLargeIcon></DonutLargeIcon>
                </IconButton>

                <IconButton>
                    <ChatIcon></ChatIcon>
                </IconButton>

                <IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
               </div>
           </div>
            
        </div>
    )
}

export default Sidebar
