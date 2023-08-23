import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { LoadingAnimation, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Fetching videos related to search
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            Search results for{" "}
            <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
          </Typography>
          <Videos videos={videos} />
        </Box>
      )}
    </>
  );
};

export default SearchFeed;
