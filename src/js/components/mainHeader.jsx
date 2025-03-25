import React, { useEffect, useState } from "react";
import { getUserInfo } from "../services/indexService";
import UserName from "./userName";

const MainHeader = ({ userId }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getUserInfo(userId);
        setUserName(userInfo.firstName);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <header>
      <div>
        <UserName name={userName} />
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </header>
  );
};

export default MainHeader;