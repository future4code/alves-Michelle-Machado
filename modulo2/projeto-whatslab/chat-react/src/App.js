import React from'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css'

function App() {
  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID='573b8226-4b67-48ee-ad91-00d25605a7e8'
        userName='admin'
        userSecret='123456'
        />
       
    </div>
  );
}

export default App;
