import { useEffect } from 'react';
import {
  categoriesEquivalent, getMedia, getPosts,
} from '../migration/wp';

const Admin = () => {
  useEffect(() => {
    getPosts()
      .then((data) => {
        data.map((entry) => {
          // eslint-disable-next-line camelcase
          getMedia(entry.featured_media).then(({ source_url }) => {
            fetch('https://api.beli.cchampou.me/posts/', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                slug: entry.slug,
                title: entry.title.rendered,
                date: entry.date,
                content: entry.content.rendered.replace(/\[.*?\]/g, ''),
                post_categories: entry.categories.map(categoriesEquivalent),
                legacy_image: source_url,
              }),
            });
          });
          return null;
        });
      });
  }, []);

  return 'Admin';
};

export default Admin;
