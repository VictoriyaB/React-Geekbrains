import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { MessageForm } from './Components/Message/MessageForm';
import { Message } from './Components/Message/Message';

function App() {
  const [messageList, setMessageList] = useState([{author:'robot', text:'Привет! Купи слона!', id:123}]);

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
  }, [messageList]);

  const renderMessageList = useCallback((mess) =>(
    <Message text={mess.text} author={mess.author} key={mess.id}/>
  ), []);

  return (
    <div className="App">
      <header className="App-header">
         <div className="messageChat">
         {messageList.map(renderMessageList)} 
         </div>
         <MessageForm  onSendMessage={handleSendMessage}/>
      </header>
    </div>
  );
}

export default App;
