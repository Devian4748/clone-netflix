import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { getDetailMovie, IDetailMovie, IMovie } from '../../api';
import { makeImagePath } from '../../utils';
import {
  BigCompanyLogo,
  BigCover,
  BigGenres,
  BigHomePage,
  BigMovie,
  BigOverview,
  BigRunTime,
  BigTitle,
  Overlay,
} from '../ui/Modal';
import { Loader } from '../ui/Text';

interface IMovieModal {
  show: boolean | undefined;
  scrollYPos: number;
  movieId: string;
}

const MovieModal = ({ show, scrollYPos, movieId }: IMovieModal) => {
  const history = useHistory();

  const { data: detailMovie, isLoading: isDetailMovieLoading } =
    useQuery<IDetailMovie>(['movies', 'detail'], () => getDetailMovie(movieId));

  const onOverlayClickHandler = () => {
    history.push('/');
  };

  console.log(detailMovie);

  return (
    <AnimatePresence>
      {show && (
        <>
          <Overlay
            onClick={onOverlayClickHandler}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <BigMovie style={{ top: scrollYPos + 100 }} layoutId={movieId}>
            {isDetailMovieLoading ? (
              <Loader>Loading...</Loader>
            ) : (
              detailMovie && (
                <>
                  <BigCover
                    clickedBgPhoto={makeImagePath(
                      detailMovie.backdrop_path,
                      'w500'
                    )}
                  />
                  <BigTitle>{detailMovie.title}</BigTitle>
                  <BigGenres>
                    {detailMovie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </BigGenres>
                  <BigOverview>{detailMovie.overview}</BigOverview>
                  {detailMovie.homepage && (
                    <BigHomePage href={detailMovie.homepage} target='blank'>
                      More
                    </BigHomePage>
                  )}
                  <BigCompanyLogo>
                    {detailMovie.production_companies.map(c => (
                      <li key={c.id}>
                        {c.logo_path && (
                          <img
                            src={makeImagePath(c.logo_path, 'w200')}
                            alt={c.name}
                          />
                        )}
                      </li>
                    ))}
                  </BigCompanyLogo>
                </>
              )
            )}
          </BigMovie>
        </>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
