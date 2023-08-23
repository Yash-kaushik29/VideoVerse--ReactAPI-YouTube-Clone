import axios from "axios";

const Base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: Base_url,
  params: {
    maxResults: "50",
  },
  headers: {
    // API key is secured put your own Rapid API key here
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// Fetching data using different links
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${Base_url}/${url}`, options);
  return data;
};
