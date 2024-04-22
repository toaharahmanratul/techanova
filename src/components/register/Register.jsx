import React, { useState } from "react";
import styles from "./styles/register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [occupation, setOccupation] = useState(null);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState(null);

  return (
    <div>
      <div className={`${styles.showcaseDiv}`}>
        <div className={`${styles.showcase}`}>
          <div className={`${styles.registrationCard}`}>
            <h3>Register here</h3>
            <form>
              <div className={`${styles.nameDiv}`}>
                <input
                  type="text"
                  placeholder="Given Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Organization"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Country"
                value={address}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Choose Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              />
              <br />
              <button type="submit" className="btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
