import React from "react";
import { Route, useParams } from "react-router-dom";
import AudioDetails from "../Components/AudioComponent/AudioDetails";
import CreatePlayList from "../Components/AudioComponent/CreatePlayList";
import MusicHome from "../Components/AudioComponent/MusicHome";
import Profile from "./ProfileComponents/Profile";
import ProfileUpload from "./ProfileComponents/ProfileUpload";
const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "upload_photo" && <ProfileUpload />}
      {id === "create-play-list" && <CreatePlayList />}
      {id === "music-home" && <MusicHome />}
      <footer>
        <AudioDetails />
      </footer>
    </div>
  );
};

export default UserRightBlock;
