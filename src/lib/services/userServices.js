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
