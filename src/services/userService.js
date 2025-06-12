import User from '../models/User';

export const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

export const getUserById = async (userId) => {
  return await User.findById(userId);
};

export const getAllUsers = async () => {
  return await User.find();
};

export const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

export const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};