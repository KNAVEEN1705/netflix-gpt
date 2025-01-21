import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        movieid +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
  
      // Check if json.results exists and is an array
      if (Array.isArray(json.results)) {
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      } else {
        console.error("Unexpected response format: json.results is not an array", json);
      }
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };
  
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;