import Dashboard from "@/components/user/dashboard/Dashboard";
import { getSession } from "next-auth/react";
import React from "react";

const index = () => {
  return <Dashboard />;
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log({ session });
  if (!session) {
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
