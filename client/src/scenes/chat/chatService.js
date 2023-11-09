const createChatUser = async (savedUser) => {
  // mandatory fields are username and secret
  const { email, _id } = savedUser;
  const formData = new FormData();
  formData.append("username", email);
  formData.append("secret", _id);
  formData.append("custom_json", savedUser);

  try {
    await fetch("https://api.chatengine.io/users/", {
      method: "POST",
      headers: {
        "PRIVATE-KEY": process.env.REACT_APP_CHAT_PROJECT_SECRET_KEY
      },
      body: formData
    });
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

const getChatUsers = async () => {
  try {
    const savedUserResponse = await fetch("https://api.chatengine.io/users/", {
      method: "GET",
      headers: {
        "PRIVATE-KEY": process.env.REACT_APP_CHAT_PROJECT_SECRET_KEY
      }
    });
    const chatUsers = await savedUserResponse.json();
    return chatUsers;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

const syncUsers = async (allUsers) => {
  allUsers.map((user) => createChatUser(user));
};

export { createChatUser, getChatUsers, syncUsers };
