const register = (req, res) => {
  const { Name, Email, Password } = req.body;
  try {
    const user = {
      Name: Name,
      Email: Email,
      Password: Password,
    };
    const Data = JSON.stringify(user);
    console.log(`i have recieved data ${Data}`);
    res.status(200).send(Data);
  } catch (error) {
    console.error("Error :", error);
  }
};

const login = (req, res) => {
  res.send("login");
};

module.exports = { register, login };
