export const getAsset = (relativePath) => {
  return `${import.meta.env.BASE_URL}/${relativePath}`;
};
