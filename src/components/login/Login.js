import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { createNewUser } from "@/lib/apiRoutes";
import { serviceOptions, occupationOptions } from "../../data/registrationData";

const Login = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   if (sessionStatus === "authenticated") {
  //     router.replace("/dashboard");
  //   }
  // }, [sessionStatus, router]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createNewUser({
        name,
        email,
        password,
        organization,
        occupation,
        serviceName,
        country,
        phoneNumber,
        address,
      });
      alert("Registration is successful!");
      router.push("/verifyemail");
    } catch (error) {
      if (error.response) {
        console.error("Server Error Response Data:", error.response.data);
        alert(error.response.data);
      } else if (error.request) {
        console.error("No Response Received:", error.request);
      } else {
        console.error("Request Setup Error:", error.message);
      }
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className={`${styles.showcaseDiv}`}>
        <div className={`${styles.showcase}`}>
          <div className={`${styles.registrationCard}`}>
            <h2>SIGN IN</h2>
            <form
              onSubmit={handleRegister}
              className={`${styles.registrationForm}`}
            >
              <div className={`${styles.fieldContainer}`}>
                <h4>Email</h4>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={`${styles.fieldContainer}`}>
                <h4>Password</h4>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={`${styles.btnLogin}`}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
