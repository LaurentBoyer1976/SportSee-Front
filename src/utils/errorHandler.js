export const handleApiError = (error, endpoint) => {
  console.error(`Error fetching data from ${endpoint}:`, error);
  throw new Error(
    "Une erreur est survenue lors de la récupération des données.",
  );
};
