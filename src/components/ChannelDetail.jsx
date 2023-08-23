import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { LoadingAnimation } from "./";

const ChannelDetail = () => {

  // Setting channelDetails and videos
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(channelDetail, videos);

  const { id } = useParams();
  // Loading animation
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // fetching channelDetails
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    // fetching channel videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Box minHeight="95vh">
          <Box>
            <div
              style={{
                background:
                  "radial-gradient(circle, rgba(183,226,222,1) 54%, rgba(122,209,204,1) 80%)",
                zIndex: 10,
                height: "250px",
              }}
            />
            <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
          </Box>
          <Box display="flex" p="2">
            <Box sx={{ mr: { sm: "100px" } }} />
            <Videos videos={videos} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ChannelDetail;
