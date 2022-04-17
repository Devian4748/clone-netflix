const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p';

export const makeImagePath = (id: string, format?: string) => {
  return `${BASE_IMAGE_URL}/${format ?? 'original'}/${id}`;
};
