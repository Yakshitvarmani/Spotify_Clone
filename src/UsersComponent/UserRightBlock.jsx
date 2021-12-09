import React from "react";
import { Route, useParams } from "react-router-dom";
import Profile from "./ProfileComponents/Profile";
const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">{id === "profile" && <Profile />}</div>
  );
};

export default UserRightBlock;
