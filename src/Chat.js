import React from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar></Avatar>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last Seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon></SearchOutlinedIcon>
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon></AttachFileIcon> 
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className='chat__message'>
                    <span className='chat__name'>Rohan</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__reciever'>
                    <span className='chat__name'>Vidu</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__message'>
                    <span className='chat__name'>Rohan</span>
                    This is a message
                    <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon></InsertEmoticonIcon>
                </IconButton>
                <form action="">
                        <input type="text" placeholder="Type a message" />
                        <button  type ="submit">Send a message</button>
                </form>

                <IconButton>
                    <MicIcon></MicIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
