export default async (endpoint, params = {}) => {
  const url = new URL(`https://api.beli.cchampou.me/${endpoint}`);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
  return fetch(url.toString()).then((res) => res.json());
};
