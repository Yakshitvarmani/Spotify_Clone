import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import firebase from "firebase";
import { AuthContextApi } from "../../Apis/AuthContext";

const ProfileUpload = () => {
  let Auth = useContext(AuthContextApi);

  let [state, setState] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let { loading, profile_photo, progress, barStatus } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let { name } = profile_photo;
      let uploadTask = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);
      // console.log(photo);

      // firebase events

      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress bar
          let progressBar =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        error => {
          //error handeling
          toast.error(error.message);
        },
        async () => {
          // completion of upload task
          let downloadURL = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          Auth.updateProfile({
            photoURL: downloadURL,
          });
        }
      );
      window.location.assign("/userHome/profile");
      toast.success("Successfully photo Uploaded");
      setState({ loading: false, barStatus: false, progress: 0 });
      console.log(profile_photo);
    } catch (error) {
      toast.error(error.message);
    }
  };
  let progressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };
  return (
    <section id="photo_upload_block">
      {
        <div id="progressSection">
          {barStatus === true ? (
            <>
              <span>
                <progressTemplate />
              </span>
              <span>{Math.round(progress) + "%"}</span>
            </>
          ) : (
            ""
          )}
        </div>
      }
      <article>
        <div className="_block">
          <h2>Upload photo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button>
              {loading === true ? <i className="fas fa-spinner"></i> : "Upload"}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;
