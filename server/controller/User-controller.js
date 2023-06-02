import user from "../model/user-schema.js";
import { v4 as uuid } from "uuid";
import generateToken from "../config/generateToken.js";
export const userRegister = async (req, res) => {
  const { name, email, password, userType } = req.body;
  console.log(req.body);
  try {
    if (!name || !email || !password || !userType) {
      return res.status(400).json({ message: "Please fill all the fields." });
    }
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with same email" });
    }
    const newUser = new user({
      _id: uuid(),
      name: name,
      email: email,
      password: password,
      userType: userType,
    });

    await newUser.save();
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      userType: newUser.userType,
      Token: generateToken(newUser._id),
    });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fillup both email and password" });
    }
    const userCheck = await user.findOne({ email });
    if (userCheck && password === userCheck.password) {
      res.status(200).json({
        email: userCheck.email,
        _id: userCheck._id,
        name: userCheck.name,
        userType: userCheck.userType,

        Token: generateToken(userCheck._id),
      });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
