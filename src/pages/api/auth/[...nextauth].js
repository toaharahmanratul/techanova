import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user.model";
import connectDB from "@/config/database";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user && user.isVerified) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user = {
            ...session.user,
            _id: dbUser._id.toString(),
            dpURL: dbUser.dpURL,
            name: dbUser.name,
          };
        }
      } catch (error) {
        console.error("Error fetching user data for session:", error);
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider == "credentials") {
        return true;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
