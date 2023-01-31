import User from "../models/user.js";

//Update user
export const updateUserController = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

//Delete user
export const deleteUserController = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

//Get  single user
export const getUserController = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//Get logged user information
export const getMeController = async (req, res, next) => {
  try {
    const userDetails = await User.findById(req.user.id);
    res.status(200).json(userDetails);
  } catch (err) {
    next(err);
  }
};

//Get all users
export const getUsersController = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
