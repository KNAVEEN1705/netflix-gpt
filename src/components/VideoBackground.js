import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieid }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieid);

  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen  aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&modestbranding=0&showinfo=0&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
//     <div className=" w-screen">
//   <iframe
//     className="w-full aspect-video"
//     src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&modestbranding=0&showinfo=0&&showinfo=0&iv_load_policy=3`}
//     title="YouTube video player"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   ></iframe>
// </div>

  );
};
export default VideoBackground;