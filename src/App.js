import './App.css';
import Message from './Components/Message/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, coach!
        </p>
        <Message message="Homework is completed" />
      </header>
    </div>
  );
}

export default App;
