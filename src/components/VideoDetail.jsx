import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import ReactPlayer from "react-player";

import { LoadingAnimation, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  // Loading animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Fetching videos statistics
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  useEffect(() => {
    // Fetching suggested videos
    fetchFromAPI('search?part=snippet&q=New').then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading......";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
      {isLoading ? (
        <LoadingAnimation></LoadingAnimation>
      ) : (
        <Box minHeight="95vh">
          <Stack direction={{ xs: "column", md: "row" }}>
            <Box flex={1}>
              <Box sx={{ width: "100%", position: "sticky", top: "85px" }}>
                {/* Playing video using ReactPlayer */}
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  className="react-player"
                  controls
                />
                {/* Video Title added */}
                <Typography color="#fff" variant="h5" fontWeight="bold">
                  {title}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ color: "#fff" }}
                  py={1}
                  px={2}
                >
                  <Link to={`/channel/${channelId}`}>
                    {/* Channel title added */}
                    <Typography
                      variant={{ sm: "subtitle1", md: "h6" }}
                      color="#fff"
                    >
                      {channelTitle}
                      <CheckCircle
                        sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                      />
                    </Typography>
                  </Link>
                  {/* Adding video statistics */}
                  <Stack direction="row" alignItems="center" gap="20px">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            {/* Suggested videos box  */}
            <Box
              px={2}
              py={{ md: 1, xs: 5 }}
              justifyContent="center"
              alignItems="center"
            >
              <Videos videos={videos} direction="column " />
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default VideoDetail;
