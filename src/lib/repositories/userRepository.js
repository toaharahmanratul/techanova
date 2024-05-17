import User from "@/models/user.model";

const create = async (payload) => {
  return await User.create(payload);
};
const find = async ({ query, select }) => {
  return User.find(query).select(select);
};

const findOne = async ({ query, select }) => {
  return User.findOne(query).select(select);
};

const findOneAndUpdate = async ({ updateQuery, updateOperation, select }) => {
  return User.findOneAndUpdate(updateQuery, updateOperation, {
    new: true,
  }).select(select);
};

const updateOne = async ({ updateQuery, updateOperation }) => {
  return User.updateOne(updateQuery, updateOperation);
};

export const userRepository = {
  create,
  find,
  findOne,
  findOneAndUpdate,
  updateOne,
};
