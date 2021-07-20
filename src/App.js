
import { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'

function App() {

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    const pusher = new Pusher('257ecbbf7d3543e9da9d', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data)=> {
      alert(JSON.stringify(data));
    });
  }, [])
  


  return (
    <div className="app">
      <div className="app__body">
      <Sidebar></Sidebar>
      <Chat></Chat>
      </div>
    
  
    </div>
  );
}

export default App;
