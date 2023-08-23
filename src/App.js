import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  Feed,
  SearchFeed,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          {/* Setting Navbar redirecting components */}
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetail />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
