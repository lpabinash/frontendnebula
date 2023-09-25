import { Box, Card, Grid, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { styled } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import "./Browser.scss";
import AuthService from "../../../services/AuthService";
import axios from "axios";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "70px",
  },
}));

const BroswerPanel = () => {
  const [musiclist, setMusicList] = useState([]);

  useEffect(() => {
    getAllMusicList();
  }, []);

  const getAllMusicList = () => {
    axios.get(AuthService.API_Music_Getlist).then((response) => {
      setMusicList(response.data);
    });
  };

  console.log("data from Broswer", musiclist);

  const tracks = [
    {
      id: 0,
      title: "Fall",
      singer: "Davido",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 1,
      title: "Lady",
      singer: "Rema",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 2,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 3,
      title: "Fall",
      singer: "Davido",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 4,
      title: "Lady",
      singer: "Rema",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 5,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 6,
      title: "Fall",
      singer: "Davido",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 7,
      title: "Lady",
      singer: "Rema",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 8,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 9,
      title: "Fall",
      singer: "Davido",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9",
    },
    {
      id: 10,
      title: "Cheap Thrills",
      singer: "Sia",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Ftia.jpg?alt=media&token=417a794a-5def-45a9-9d89-3193adba46fa",
    },
    {
      id: 11,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 12,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 13,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 12,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 13,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 14,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 15,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 16,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 17,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 18,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 19,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 20,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 21,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 22,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 23,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
    {
      id: 24,
      title: "In My Feelings",
      singer: "Drake",
      src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73",
    },
  ];

  return (
    <Box>
      <Root>
        <Box
          sx={{
            color: "white",
            paddingLeft: "35px",
            margin: "5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 900,
            }}
            variant="h6"
          >
            Library
          </Typography>
          <Typography variant="caption">Discover interesting songs</Typography>
        </Box>
      </Root>

      <Grid
        container
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item className="browser">
          {musiclist.map((item, index) => (
            <Card
              orientation="horizontal"
              key={item._id}
              variant="outlined"
              sx={{ minWidth: 100, backgroundColor: "#18181B" }}
              className="cardcontainer card"
            >
              <Box className="hoverimag">
                <img
                  src={`${item.coverimage}`}
                  srcSet={`${item.coverimage}`}
                  alt={item.title}
                  width="300"
                  height="200"
                />
                <div className="playcircleicon">
                  <PlayCircleIcon
                    sx={{
                      color: "whitesmoke",
                    }}
                    fontSize="large"
                  />
                </div>
              </Box>

              <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                <Typography variant="h6" className="commontypo">
                  {item.title}
                </Typography>
                <Typography level="body-sm" className="commontypo">
                  {item.artist}
                </Typography>
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BroswerPanel;
