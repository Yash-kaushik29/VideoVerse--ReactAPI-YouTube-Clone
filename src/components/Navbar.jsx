import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Stack direction="row">
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", marginRight: "30px" }}
      >
        {/* Logo added */}
        <img src={logo} alt="logo" height={45} />
      </Link>

      <Link to="/">
        {/* Title added */}
        <Typography
          sx={{ color: "red", fontSize: { xs: "0", md: "40px", lg: "50px" } }}
          fontWeight="bolder"
        >
          VideoVerse
        </Typography>
      </Link>
    </Stack>
    {/* SearchBar rendered */}
    <SearchBar />
  </Stack>
);

export default Navbar;
