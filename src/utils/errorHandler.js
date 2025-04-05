export const handleApiError = (error, endpoint) => {
  console.error(`Error fetching data from ${endpoint}:`, error);
  throw new Error(`Failed to fetch data from ${endpoint}`);
};
