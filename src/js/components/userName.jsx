import React from "react";

const UserName = ({data})=> {
  console.log("data dans userName:", data);  
  return <h1>Bonjour, {data}!</h1>;
};

export default UserName;