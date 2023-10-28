import { ChatEngine } from "react-chat-engine";

const Messages = () => {
  return (
    <ChatEngine
      projectID={process.env.CHAT_PROJECT_ID}
      userName={process.env.CHAT_USERNAME}
      userSecret={process.env.CHAT_PASSWORD}
    />
  );
};

export default Messages;
