import { baseUrl } from '../../config/api.json';

const largestSize = (media) => {
  const { formats } = media;

  return formats.thumbnail;
};

export const getUrlFromFormat = (format) => baseUrl + format.url;

export const getPreferredSize = (media, preferredSize) => {
  const { formats } = media;

  if (formats[preferredSize]) {
    return formats[preferredSize];
  }

  return largestSize(media);
};
