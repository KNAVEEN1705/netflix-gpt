import Header from './Header'
import useNowPlayingMovies from '../hooks/usenowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browes = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useTopRated();
 useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer />
    </div>
  )
}

export default Browes