export const Get = async (path: string, options?: RequestInit) => {
  const baseUrl = process.env.API_URL;

  if (!options) {
    options = {
      cache: "no-store",
    };
  }

  const response = await fetch(baseUrl + path, options);

  return response.json();
};
