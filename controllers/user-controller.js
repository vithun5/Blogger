import User from "../model/User";
import bcrypt from "bcryptjs";

//ViewAllblogs
export const GetAllUsers = async (req, res, next) => {
  let user;
  try {
    user = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(400).json({ message: "User Not Found" });
  }
  return res.status(200).json({ user });
};

//User signup
export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User already Found" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
  });

  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ user });
};

//User login
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Couldnt Find User" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res
    .status(200)
    .json({ message: "Login Successfull", user: existingUser });
};
