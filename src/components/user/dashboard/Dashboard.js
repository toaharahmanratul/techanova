import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { RiArrowRightSLine } from "react-icons/ri";
import { getUser } from "@/lib/apiRoutes";

const Dashboard = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const id = session?.user._id;
        const res = await getUser(id);
        if (res.status === 200) {
          setUserData(res.data.userData);
        }
      } catch (error) {
        console.error("Error fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className={styles["main-section"]}>
      <div className={styles["top-section"]}>
        <h1>Profile Information</h1>
        <p>{`User / Dashboard / ${session?.user?.name}`}</p>
      </div>
      <div className={styles["profile-media-section"]}>
        <img
          className={styles["cover-photo"]}
          src="/images/default_Cover.jpg"
          alt="Cover"
        />
        <img
          className={styles["profile-photo"]}
          src="/images/default_DP_2.jpg"
          alt="Profile Picture"
        />
        <div className={styles["info-box"]}>
          <h2>{session?.user?.name}</h2>
          {userData?.occupation !== "others" && (
            <p>{`${userData?.occupation}, ${userData?.organization}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
