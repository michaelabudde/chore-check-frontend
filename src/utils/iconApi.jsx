export const iconData = (url, options) => {
  // Append authorization header with your API key
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  };

  // Merge provided headers with authorization header
  const mergedOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...headers,
    },
  };

  // Perform the fetch request
  return fetch(url, mergedOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Process the response data as needed
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
