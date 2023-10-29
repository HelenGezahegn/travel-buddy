const migrateUserToChat = async (savedUser) => {
  // mandatory fields are username and secret
  const { email, _id } = savedUser;
  const formData = new FormData();
  formData.append("username", email);
  formData.append("secret", _id);
  formData.append("custom_json", savedUser);

  try {
    const savedUserResponse = await fetch("https://api.chatengine.io/users/", {
      method: "POST",
      headers: {
        "PRIVATE-KEY": process.env.REACT_APP_CHAT_PROJECT_SECRET_KEY
      },
      body: formData
    });
    console.log(JSON.stringify(savedUserResponse));
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

const syncUsers = async () => {};

export { migrateUserToChat, syncUsers };
