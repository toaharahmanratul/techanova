import Dashboard from "@/components/user/dashboard/Dashboard";
import { getSession } from "next-auth/react";
import React from "react";

const index = () => {
  return <Dashboard />;
};

export default index;
