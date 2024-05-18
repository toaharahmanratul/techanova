import { hashPassword } from "@/utils/register/hashPassword";
import { userRepository } from "../repositories/userRepository";
import { sendEmail } from "@/utils/verification/mailer";

export const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      organization,
      occupation,
      serviceName,
      country,
      phoneNumber,
      address,
    } = req.body;
    const isEmailExists = await userRepository.findOne({
      query: { email },
      select: "-password",
    });
    if (isEmailExists) {
      return res.status(400).send("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await userRepository.create({
      name,
      email,
      password: hashedPassword,
      organization,
      occupation,
      serviceName,
      country,
      phoneNumber,
      address,
    });
    await sendEmail({ email: newUser.email, userId: newUser._id });
    return res.status(200).json({
      success: true,
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getUserData = async (req, res) => {
  try {
    const { id } = req.query;
    const userData = await userRepository.findOne({
      query: { _id: id },
      select: "-password",
    });
    if (!userData) {
      return res.status(400).json({
        error: "User not found, invalid token!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User data fetched successfully!",
      userData,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const verifyUserEmail = async (req, res) => {
  try {
    const { token } = req.body;
    const user = await userRepository.findOne({
      query: {
        verifyToken: token,
        verifyTokenExpiry: { $gt: Date.now() },
      },
      select: "-password",
    });
    if (!user) {
      return res.status(400).json({
        error: "User not found, invalid token!",
      });
    }
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Email verified successfully!",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
