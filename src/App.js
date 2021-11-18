import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';

import './App.css';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="c4e21d75-d6b0-45f3-8e2c-f176943d5eda"
      userName="Alban"
      userSecret="test1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
  );
}

export default App;
