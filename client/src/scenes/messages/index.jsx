import { ChatEngine } from "react-chat-engine";

const Messages = () => {
  return (
    <ChatEngine
      projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
      userName={process.env.REACT_APP_CHAT_USERNAME}
      userSecret={process.env.REACT_APP_CHAT_PASSWORD}
    />
  );
};

export default Messages;
