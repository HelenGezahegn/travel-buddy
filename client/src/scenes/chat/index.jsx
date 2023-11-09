import { useEffect } from "react";
import { Box } from "@mui/material";
import NavBar from "scenes/navBar";
import { ChatEngine } from "react-chat-engine";
import baseUrl from "state/baseUrl";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { syncUsers } from "./chatService";

const Messages = () => {
  // eslint-disable-next-line no-unused-vars
  const { userId } = useParams();
  const token = useSelector((state) => state.token);

  const getUsers = async () => {
    const response = await fetch(`${baseUrl}/messages`, {
      // may need to change this request URL bc it conflicts with API call? add user ID to it if works
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });
    const allUsers = await response.json();
    syncUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <NavBar />
      <Box padding="2rem">
        <ChatEngine
          height="90vh"
          projectID={process.env.REACT_APP_CHAT_PROJECT_ID}
          userName={process.env.REACT_APP_CHAT_USERNAME}
          userSecret={process.env.REACT_APP_CHAT_PASSWORD}
        />
      </Box>
    </Box>
  );
};

export default Messages;
