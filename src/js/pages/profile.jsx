import React from "react";
import MainHeader from "./MainHeader";
import ChartsLayout from "./ChartsLayout";
import KeyDataCard from "./KeyDataCard";

const Profile = ({ userId }) => {
  return (
    <div className="profile">
      <MainHeader userId={userId} />
      <ChartsLayout userId={userId} />
      <KeyDataCard userId={userId} />
    </div>
  );
};

export default Profile;