import React, { useEffect, useState } from "react";
import styles from "./register.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { createNewUser } from "@/lib/apiRoutes";
import { serviceOptions } from "../../data/registrationData";

const Register = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [occupation, setOccupation] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
            <h2>REGISTRATION</h2>
            <form className={`${styles.registrationForm}`}>
              <div className={`${styles.fieldContainer}`}>
                <h4>Name</h4>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <div className={`${styles.fieldContainer}`}>
                <h4>Organization</h4>
                <input
                  type="text"
                  placeholder="Organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  required
                />
              </div>
              <div className={`${styles.fieldContainer}`}>
                <h4>Occupation</h4>
                <input
                  type="text"
                  placeholder="Occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  required
                />
              </div>
              <div className={styles.fieldContainer}>
                <h4>Choose Your Service</h4>
                <select
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  required
                >
                  <option value="">Select Service</option>
                  {serviceOptions?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className={`${styles.fieldContainer}`}>
                <h4>Country</h4>
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className={`${styles.fieldContainer}`}>
                <h4>Phone</h4>
                <input
                  type="text"
                  placeholder="Phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className={`${styles.fieldContainer}`}>
                <h4>Address</h4>
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={`${styles.btnRegister}`}>
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
