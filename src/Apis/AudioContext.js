import React, { useState, useEffect, createContext } from "react";
import firebase from "firebase";
export let AudioContextApi = createContext();

let AudioContextProvider = ({ children }) => {
  let [state, setState] = useState([]);
  let [selectSong, setSelectSong] = useState("");

  let HandleSelect = audio => {
    setSelectSong(audio);
    console.log(selectSong);
  };
  useEffect(() => {
    let fetchAudios = async () => {
      let AudioList = firebase.database().ref("/audio_library");
      // firebase event to fetch
      AudioList.on("value", callback => {
        console.log(callback.val());
        console.log(callback.key);
        let SpotifyMusics = [];
        callback.forEach(Audio => {
          let {
            DownloadMp3,
            DownloadPoster,
            artist,
            category,
            audio_details,
            language,
            title,
          } = Audio.val();
          SpotifyMusics.push({
            id: Audio.key,
            title: title,
            artist: artist,
            language: language,
            category: category,
            details: audio_details,
            poster: DownloadPoster,
            src: DownloadMp3,
          });
        });
        setState(SpotifyMusics);
      });
    };
    fetchAudios();
  }, [state.AUDIOS]);

  return (
    <AudioContextApi.Provider value={{ state, HandleSelect, selectSong }}>
      {children}
    </AudioContextApi.Provider>
  );
};

export default AudioContextProvider;
