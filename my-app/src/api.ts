const API_KEY = '5eabab2d67fec8d2fa29a367ed1fd853';
const BASE_URL = 'https://api.themoviedb.org/3';

interface IMovie {
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  title: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=kr`
  ).then(res => res.json());
};
