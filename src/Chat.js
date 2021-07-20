import React,{useState} from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'


function Chat({messages}) {
    const [input,setInput]=useState("")

    const sendMessage= async (e)=>{
        e.preventDefault();
    await axios.post('/messages/new',{
    message:input,
    name:"Vidu",
    timestamp:"Just now!",
    recieved:false
        });
        setInput("")
    };
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
                {messages.map((message)=>(
                    <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
                    <span className='chat__name'>{message.name}</span>
                    {message.message}
                    <span className='chat__timestamp'>
                        {message.timestamp}
                    </span>
                </p>
                ))}
                
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon></InsertEmoticonIcon>
                </IconButton>
                <form action="">

                        <input value={input} 
                        onChange={(e)=>setInput(e.target.value)} 
                        type="text" 
                        placeholder="Type a message" />

                        <button  type ="submit" onClick={sendMessage}>Send a message</button>
                </form>

                <IconButton>
                    <MicIcon></MicIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
