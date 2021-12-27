import React from "react";
import AudioItem from "./AudioItem";

const AudioList = props => {
  let { audio, HandleSelect } = props;
  return (
    <section id="musicHome">
      <h1 className="font_size">List of Audios</h1>
      <article>
        {audio.map(x => {
          return <AudioItem key={x.id} audio={x} HandleSelect={HandleSelect} />;
        })}
      </article>
    </section>
  );
};

export default AudioList;
