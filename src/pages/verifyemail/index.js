"use client";
import VerifyEmail from "@/components/verifyemail/VerifyEmail";
import { getSession } from "next-auth/react";
import React from "react";

const Index = () => {
  return <VerifyEmail />;
};

export default Index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log({ session });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
