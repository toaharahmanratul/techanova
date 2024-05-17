import { verifyEmail } from "@/lib/apiRoutes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./verify-email.module.css";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0 && !verified) {
      // verify();
    }
  }, [token, verified]);

  const verify = async () => {
    try {
      await verifyEmail({ token });
      setVerified(true);
    } catch (error) {
      setError(error);
      console.log(error.response.data);
    }
  };

  if (!verified && !token) {
    return (
      <div className={`${styles.mainContainer}`}>
        <h1>
          Please check your email and click the link to verify your account.
        </h1>{" "}
        <br />
        <br />
        {error && (
          <div>
            <h2>Something gone wrong!</h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.mainContainer}`}>
      <h1>Email Verification</h1>
      <h2>{token ? `` : "No valid token found!"}</h2>
      {!verified && token && (
        <button className={`${styles.btnVerify}`} onClick={verify}>
          Click Here to Verify
        </button>
      )}
      {verified && !error && token && (
        <div className={`${styles.msgContainer}`}>
          <h2>Your email verified successfully!</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2>Something gone wrong!</h2>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
