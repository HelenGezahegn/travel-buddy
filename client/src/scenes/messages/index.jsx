import { ChatEngine } from "react-chat-engine";

const Messages = () => {
  return (
    <ChatEngine
      projectID={process.env.CHAT_PROJECT_ID}
      userName="Admin"
      userSecret={process.env.CHAT_PASSWORD}
    />
  );
};

export default Messages;
