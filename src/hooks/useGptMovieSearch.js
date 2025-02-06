import { API_OPTIONS } from "../utils/constant";
import openai from '../utils/openai';

import { addGptMovieResult } from '../utils/GptSlice';
import { useDispatch } from "react-redux";
const useGptMovieSearch=()=>{
    const dispatch = useDispatch();
    const searchMovieTMDB= async(movies)=>{
        const data =  await fetch('https://api.themoviedb.org/3/search/movie?query='+movies+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
        const json= await data.json();
        return json.results;
      }
    const handleGptSearchClick = async (query) => {
        if (!query) {
          console.error("Search query is empty.");
          return;
        }
    
        const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query: " +
          query +
          ". Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Kaithi, Vikram, Maanagaram, Master, Leo";
    
        try {
          const gptResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-4o-mini",
          });
    
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
          if (!gptMovies) {
            console.error("No movie suggestions from GPT.");
            return;
          }
          
          const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
          const tmdbResults = await Promise.all(promiseArray);
          console.log(tmdbResults)
    
          dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
        } catch (error) {
          console.error("Error fetching GPT movie recommendations:", error);
        }
      };
      
      return { handleGptSearchClick }; 

}

export default useGptMovieSearch;