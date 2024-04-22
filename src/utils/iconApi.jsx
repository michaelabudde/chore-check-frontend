export const iconData = (query) => {
  const url = `https://api.iconfinder.com/v4/icons/search?query=${query}&count=10&premium=0`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data.icons; // Return only the icons from the response
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
