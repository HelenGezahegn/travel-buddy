import { ChatEngine } from "react-chat-engine";
import { Box } from "@mui/material";
import NavBar from "scenes/navBar";

const Messages = () => {
  return (
    <Box>
      <NavBar />
      <Box padding="2rem">
        <ChatEngine
          projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
          userName={process.env.REACT_APP_CHAT_USERNAME}
          userSecret={process.env.REACT_APP_CHAT_PASSWORD}
        />
      </Box>
    </Box>
  );
};

export default Messages;
