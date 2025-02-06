import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies=()=>{

    const dispatch= useDispatch();
    const nowPlayingmovie= useSelector((store)=>store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      ! nowPlayingmovie && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;