import { useViewportScroll } from 'framer-motion';
import { useQuery } from 'react-query';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import {
  getMovies,
  getTopRatedMovies,
  IGetMoviesResult,
  getUpComingMovies,
} from '../api';
import MovieModal from '../components/modal/MovieModal';
import MovieSlider from '../components/slider/MovieSlider';
import { Loader, Overview, Title } from '../components/ui/Text';
import { makeImagePath } from '../utils';

const Wrapper = styled.div`
  background-color: #000;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${props => props.bgPhoto});
  background-size: cover;
`;

const offset = 6;

const Home = () => {
  const bigMovieMatch = useRouteMatch<{ movieId: string }>('/movies/:movieId');
  const { scrollY } = useViewportScroll();
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'nowPlaying'],
    getMovies
  );

  const { data: topMovies, isLoading: isTopMovieLoading } =
    useQuery<IGetMoviesResult>(['movies', 'top-rated'], getTopRatedMovies);

  const { data: upComingMovies, isLoading: isUpComingLoading } =
    useQuery<IGetMoviesResult>(['movies', 'upcoming'], getUpComingMovies);

  const filterUpComing = upComingMovies?.results.filter(
    movie => movie.backdrop_path !== null
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path ?? '')}>
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <MovieSlider
            title='Now Playing'
            data={data?.results.slice(1)}
            initial={false}
            offset={offset}
          />
          {isTopMovieLoading ? (
            <Loader>Loading...</Loader>
          ) : (
            <MovieSlider
              title='Top Rated'
              data={topMovies?.results}
              initial={false}
              offset={offset}
            />
          )}
          {isUpComingLoading ? (
            <Loader>Loading...</Loader>
          ) : (
            <MovieSlider
              title='UpComing'
              data={filterUpComing}
              initial={false}
              offset={offset}
            />
          )}

          {bigMovieMatch && (
            <MovieModal
              show={bigMovieMatch.isExact}
              scrollYPos={scrollY.get()}
              movieId={bigMovieMatch.params.movieId}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Home;
