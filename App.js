
import './App.css';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='App'>
      <div className='Sidebar'>
          <Sidebar />
      </div>
      <div className='ChatWindow'>
          <ChatWindow />
      </div>
    </div>
  );
}

export default App;
