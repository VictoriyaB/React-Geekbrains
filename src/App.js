import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from './Components/Message/MessageList';
import { MessageForm } from './Components/Message/MessageForm';
import { ChatList } from './Components/Message/ChatList';



function App() {
  
  const [messageList, setMessageList] = useState([{author:'robot', text:'Привет! Купи слона!', id:Date.now()}]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessageList([...messageList, newMessage]);
  }, [messageList]);

  useEffect(() => {
    if(messageList[messageList.length - 1].author !== 'robot'){
      const robotText = 'Все говорят ' +  messageList[messageList.length - 1].text + ', а ты купи слона!'
      const robotmess = {
        author: 'robot',
        text: robotText,
        id: Date.now()
      }
      setTimeout(() => {
        setMessageList([...messageList, robotmess]);
      }, 1000); 
    }
    return () => clearTimeout();
  }, [messageList]);

  
  return (
    <div className="App">
      <header className="App-header">
        <ChatList/>
        <div>
        <MessageList messageList={messageList} />
        <MessageForm  onSendMessage={handleSendMessage}/>
        </div>
      </header>
    </div>
  );
}

export default App;
