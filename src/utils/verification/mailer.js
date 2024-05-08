import User from "@/models/user.model";
import nodemailer from "nodemailer";
import bcrypt, { hash } from "bcryptjs";
import { userRepository } from "@/lib/repositories/user-repository";
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

    // Mailtraper of ShellBeeHaken Gmail
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "15bcc66b222ac9",
        pass: "81c31e8dc98b10",
      },
    });

    // Mailtraper of Personal Gmail
    // var transport = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: "e25b3f85868e11",
    //     pass: "bdc42636e02047",
    //   },
    // });

    // From Google App - Personal Gmail
    // var transport = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify Your Email for the Twitter Clone App",
      html: `<p>Click <a href="http://localhost:3000/verifyemail?token=${hashedToken}">here</a> to verify your email. Or copy and paste the following link to your browser: <br>
      "http://localhost:3000/verifyemail?token=${hashedToken}"</p>
      <h3>Caution: This is a clone web app for development purpose. Do not click the link if you haven't tried to sign up in the twitter clone app.</h3>`,
    };
    const mailResponse = await transport.sendMail(mailOptions);

    return { updatedUser, mailResponse };
  } catch (error) {
    throw new Error(error.message);
  }
};
