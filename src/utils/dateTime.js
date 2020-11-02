const options = {
  year: 'numeric', month: 'short', day: 'numeric',
};

// eslint-disable-next-line import/prefer-default-export
export const toReadableShortDate = (date) => date.toLocaleDateString('fr-FR', options);
