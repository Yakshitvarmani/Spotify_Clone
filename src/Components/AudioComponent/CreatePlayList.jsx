import React, { Fragment, useState } from "react";
import "./Audio.css";
import { toast } from "react-toastify";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

let genre = [
  "Blues",
  "Classical",
  "Country",
  "Disco",
  "HipHop",
  "Jazz",
  "Popular Music",
  "Soul Music",
  "Punk Rock",
  "Funk",
];
const CreatePlayList = () => {
  let history = useHistory();
  let [state, setState] = useState({
    title: "",
    artist: "",
    language: "",
    category: "",
    audio_details: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let {
    title,
    artist,
    language,
    category,
    audio_details,
    loading,
    barStatus,
    progress,
  } = state;

  let [poster, setPoster] = useState("");
  let [audioFile, setAudioFile] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };
  let handleAudioFile = e => {
    setAudioFile({ [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      console.log(state);
      console.log(poster);
      console.log(audioFile);
      let AUDIO_POSTER = poster.audio_poster.name;
      let AUDIO_FILE = audioFile.audio_file.name;
      let audio_storage = firebase
        .storage()
        .ref(`/music-poster/${AUDIO_POSTER}`)
        .put(poster.audio_poster);
      let Mp3_storage = firebase
        .storage()
        .ref(`/music-file/${AUDIO_FILE}`)
        .put(audioFile.audio_file);
      toast.success("Successfully Uploaded");
      console.log(audio_storage);
      console.log(Mp3_storage);
      Mp3_storage.on(
        "state_changed",
        snapShot => {
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        err => {
          throw err;
        },
        async () => {
          // completion of task
          let DownloadPoster = await firebase
            .storage()
            .ref("music-poster")
            .child(AUDIO_POSTER)
            .getDownloadURL();
          setPoster(DownloadPoster);
          let DownloadMp3 = await firebase
            .storage()
            .ref("music-file")
            .child(AUDIO_FILE)
            .getDownloadURL();
          setAudioFile(DownloadMp3);
          firebase
            .database()
            .ref("audio_library")
            .push({
              ...state,
              DownloadMp3,
              DownloadPoster,
            });
          history.push("/userHome/profile");
          toast.success("Successfully audio file is uploaded");
        }
      );
      // let downloadPoster = await firebase.storage().ref("music-poster").child(audio_storage).getDownloadURL();
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <section id="AudioSectionnn">
      <article>
        <h2>Create Playlist</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grouppp">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-controlll"
              name="title"
              placeholder="enter audio title"
              required
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-grouppp">
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              className="form-controlll"
              name="artist"
              required
              value={artist}
              onChange={handleChange}
            />
          </div>
          <div className="form-grouppp">
            <label htmlFor="language">Language</label>
            <input
              type="text"
              className="form-controlll"
              name="language"
              required
              value={language}
              onChange={handleChange}
            />
          </div>
          <div className="form-grouppp">
            <label htmlFor="category">Audio Category</label>
            <select name="category" value={category} onChange={handleChange}>
              {genre.map((val, index) => (
                <Fragment key={index}>
                  <option value={val}>{val}</option>
                </Fragment>
              ))}
              ;
            </select>
          </div>
          <div className="form-grouppp">
            <label htmlFor="audio_details">Audio Details</label>
            <textarea
              name="audio_details"
              cols="30"
              rows="10"
              className="audio_details"
              value={audio_details}
              onChange={handleChange}
            ></textarea>
          </div>
          <br />
          <div className="form-grouppp">
            <label htmlFor="audio_poster">Poster</label>
            <input
              type="file"
              className="form-controlll"
              name="audio_poster"
              onChange={handlePoster}
            />
          </div>
          <br />

          <div className="form-grouppp">
            <label htmlFor="audio_file">Upload Audio File</label>
            <input
              type="file"
              className="form-controlll"
              name="audio_file"
              onChange={handleAudioFile}
            />
          </div>
          <div className="form-grouppp btn-block">
            <button>{loading ? "uploading" : " upload"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreatePlayList;
