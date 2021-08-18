import { ChatEngine } from 'react-chat-engine';



import './App.css';

const projectID = '409e9382-63ab-4945-9cb7-dc2d0fbcdd0f';

const App = () => {


  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="chatappadmin"
      userSecret="2743"
     // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;