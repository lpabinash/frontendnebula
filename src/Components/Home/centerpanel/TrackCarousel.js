import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Card, item, Box, Typography } from "@mui/material";
function TrackCarousel({ tracks }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: "100%",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {tracks.map((item) => (
        <Card
          orientation="horizontal"
          key={item.id}
          variant="outlined"
          sx={{ minWidth: 170, backgroundColor: "#18181B" }}
          className="cardcontainer"
        >
          <div className="imgBox">
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              width="100%"
              className="cardimage"
              maxHeight="100%"
            />
            <div className="overlay">
              <PlayCircleIcon sx={{ color: "whitesmoke" }} fontSize="large" />
            </div>
          </div>
          <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
            <Typography variant="h6" className="commontypo">
              {item.title}
            </Typography>
            <Typography level="body-sm" className="commontypo">
              {item.singer}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default TrackCarousel;
