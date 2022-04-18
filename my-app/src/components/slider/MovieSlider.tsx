import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IMovie } from '../../api';
import { LeftArrow, RightArrow } from '../../Icons';
import { makeImagePath } from '../../utils';
import { Box, Info, Row, Slider } from '../ui/Slider';
import { SliderTitle } from '../ui/Text';

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      duration: 0.3,
      delay: 0.5,
      type: 'tween',
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.5,
      type: 'tween',
    },
  },
};

interface IMovieSlider {
  offset: number;
  initial: boolean;
  data: IMovie[] | undefined;
  title: string;
}

const MovieSlider = ({ offset, initial, data, title }: IMovieSlider) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const history = useHistory();

  const toggleLeaving = () => setLeaving(prev => !prev);

  const onBoxClickedHandler = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };

  const moveIndex = (isNext: boolean) => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setLeaving(true);
      const totalMovies = data?.length ?? 0;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      const minIndex = 0;
      if (isNext) {
        setIndex(prev => (prev === maxIndex ? 0 : prev + 1));
      } else {
        setIndex(prev => (prev === minIndex ? 0 : prev - 1));
      }
    }
  };

  const rowVariants = {
    hidden: {
      x: window.outerWidth - 5,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth + 5,
    },
  };

  return (
    <Slider>
      <LeftArrow onClickDec={() => moveIndex(false)} />
      <RightArrow onClickInc={() => moveIndex(true)} />
      <SliderTitle>{title}</SliderTitle>
      <AnimatePresence initial={initial} onExitComplete={toggleLeaving}>
        <Row
          variants={rowVariants}
          key={index}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ type: 'tween', duration: 1 }}
        >
          {data?.slice(offset * index, offset * index + offset).map(movie => (
            <Box
              layoutId={movie.id + ''}
              onClick={() => onBoxClickedHandler(movie.id)}
              variants={boxVariants}
              whileHover='hover'
              initial='normal'
              transition={{ type: 'tween' }}
              key={movie.id}
              bgphoto={makeImagePath(movie.backdrop_path, 'w500')}
            >
              <Info variants={infoVariants}>
                <h4>{movie.title}</h4>
              </Info>
            </Box>
          ))}
        </Row>
      </AnimatePresence>
    </Slider>
  );
};

export default MovieSlider;
