import React from "react";
import { Route, useParams } from "react-router-dom";
import CreatePlayList from "../Components/AudioComponent/CreatePlayList";
import Profile from "./ProfileComponents/Profile";
import ProfileUpload from "./ProfileComponents/ProfileUpload";
const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "upload_photo" && <ProfileUpload />}
      {id === "create-play-list" && <CreatePlayList />}
    </div>
  );
};

export default UserRightBlock;
