export const getCategories = async () => fetch('https://www.belinda-sanstabous.com/wp-json/wp/v2/categories?per_page=100')
  .then((response) => response.json());

export const getPosts = async () => fetch('https://www.belinda-sanstabous.com/wp-json/wp/v2/posts?per_page=100')
  .then((response) => response.json());

export const getMedia = async (id) => fetch(`https://www.belinda-sanstabous.com/wp-json/wp/v2/media/${id}`)
  .then((response) => response.json());

export const categoriesEquivalent = (id) => {
  switch (id) {
    case 1:
      return 1;
    case 29:
      return 2;
    case 25:
      return 3;
    case 30:
      return 4;
    default:
      return null;
  }
};
