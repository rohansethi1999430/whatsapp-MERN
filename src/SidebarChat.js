import React from 'react'
import './SidebarChat.css'
import Avatar from '@material-ui/core/Avatar';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
           <Avatar></Avatar> 
           <div className="sidebarChat__info">
               <h2>Room Name</h2>
               <p>This is last message </p>
           </div>
        </div>
    )
}

export default SidebarChat
