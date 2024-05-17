import User from "@/models/user.model";
import nodemailer from "nodemailer";
import bcrypt, { hash } from "bcryptjs";
import { userRepository } from "@/lib/repositories/userRepository";
import { BASE_API_URL } from "../constants";
const saltRounds = 10;

export const sendEmail = async ({ email, userId }) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), saltRounds);
    const updateQuery = {
      email: email,
    };
    const updateOperation = {
      $set: {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      },
    };
    const select = "-password";
    const updatedUser = await userRepository.findOneAndUpdate({
      updateQuery,
      updateOperation,
      select,
    });

    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify Your Email for your Techanova Account",
      html: `<p>Click <a href="${BASE_API_URL}/verifyemail?token=${hashedToken}">here</a> to verify your email. Or copy and paste the following link to your browser: <br>
      "${BASE_API_URL}/verifyemail?token=${hashedToken}"</p>
      <h3>Caution: Do not click the link if you haven't tried to sign up in Techanova.</h3>`,
    };
    const mailResponse = await transport.sendMail(mailOptions);

    return { updatedUser, mailResponse };
  } catch (error) {
    throw new Error(error.message);
  }
};
