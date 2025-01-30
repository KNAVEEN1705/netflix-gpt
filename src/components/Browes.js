import Header from './Header'
import useNowPlayingMovies from '../hooks/usenowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browes = () => {
const gptSearchView= useSelector(store=>store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovies();
 useTopRated();
 useUpcomingMovies();
  return (
    <div>
      <Header/>
      {
        gptSearchView ? (<GptSearch/>) : 
        (<>
        <MainContainer/>
        <SecondaryContainer />
        </>)
      }
      
      
    </div>
  )
}

export default Browes