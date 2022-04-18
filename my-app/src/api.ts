const API_KEY = '5eabab2d67fec8d2fa29a367ed1fd853';
const BASE_URL = 'https://api.themoviedb.org/3';

export interface IMovie {
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path?: string;
  title: string;
}

export interface IGetMoviesResult {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IProduction_Company {
  id: number;
  logo_path: string;
  name: string;
}

interface IGenres {
  id: number;
  name: string;
}

export interface IDetailMovie {
  id: number;
  title: string;
  genres: IGenres[];
  backdrop_path: string;
  overview: string;
  homepage: string;
  production_companies: IProduction_Company[];
  runtime: number;
}

export const getMovies = () => {
  return fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=kr`
  ).then(res => res.json());
};

export const getTopRatedMovies = () => {
  return fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&region=KR&page=24`
  ).then(res => res.json());
};

export const getUpComingMovies = () => {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=24`).then(
    res => res.json()
  );
};

export const getDetailMovie = (movieId: string) => {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&page=24`).then(
    res => res.json()
  );
};
