import './App.css';
import { useCallback, useState } from 'react';
import { MessageForm } from './Components/Message/MessageForm';
import {Message} from './Components/Message/Message';

function App() {
  const [messageList, setMessageList] = useState([{author: 'me', text: 'Hi', id: 123}]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessageList([...messageList, newMessage]);
  }, [messageList]);

  const renderMessageList = useCallback((mess) =>(
    <Message text={mess.text} author={mess.author} key={mess.id}/>
  ), []);

  return (
    <div className="App">
      <header className="App-header">
         {messageList.map(renderMessageList)} 
         <MessageForm  onSendMessage={handleSendMessage}/>
      </header>
    </div>
  );
}

export default App;
