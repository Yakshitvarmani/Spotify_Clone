import React, { useContext, Fragment } from "react";
import { AudioContextApi } from "../../Apis/AudioContext";
import AudioList from "./AudioList";

const MusicHome = () => {
  let AUDIO = useContext(AudioContextApi);
  return (
    <Fragment>
      {AUDIO.state.length >= 0 && (
        <AudioList audio={AUDIO.state} HandleSelect={AUDIO.HandleSelect} />
      )}
    </Fragment>
  );
};

export default MusicHome;

//   return (
//     <section id="musicHome">
//       <article>
//         {AUDIO === null ? (
//           <Spinner />
//         ) : (
//           AUDIO.map(audio => {
//             let {
//               id,
//               title,
//               artist,
//               language,
//               category,
//               details,
//               poster,
//               src,
//             } = audio;
//             return (
//               <div className="col-6" key={id}>
//                 <figure>
//                   <img src={poster} alt={title} />
//                 </figure>
//                 <h3>{title}</h3>
//                 <audio src={src} ref={audioRef}></audio>
//               </div>
//             );
//           })
//         )}
//       </article>
//     </section>
//   );
