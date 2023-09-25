import {
  Avatar,
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ToggleButton,
  Typography,
  Stack
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getMusicsStart, getPlaylistPlayingStart, getTrackStart } from "../../../store/slices/musicSlice";
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from 'react-router-dom'

export default function Rightslidebar() {
  const data = useSelector((state) => (state.music.musics));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getPlayStart = createAction('music/getPlayStart');
  const getPlaylistPlayingStart = createAction('music/getPlaylistPlayingStart');
  useEffect(() => {
    // getAllMusicList();
    dispatch(getMusicsStart())
  }, []);

  const handleTopChartClick = () => {
    dispatch(getPlayStart(true))
  }
  const handleClick = (id) => {
    dispatch(getPlaylistPlayingStart(data))
    let music = data.filter((track) => track._id == id)
    let index = data.findIndex(x => x._id === music[0]._id);
    // dispatch(getMusicStart(music))
    dispatch(getTrackStart(index))
    dispatch(getPlayStart(true))
  }

  function secondsToMinutes(time) {
    return Math.floor(time / 60) + ':' + Math.floor(time % 60);
  }

  const navigateToCategory=(item)=>{
    navigate('/category/'+item.title,{ state: { item } })
  }

  return (
    <>
      <Box className="topcharts" sx={{
        overflow: "auto",
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '0.1em',
        },
        '&::-webkit-scrollbar-track': {
          background: "transparent",
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#52525b',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#555'
        }
      }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="h5" component="h5" align="left" color="whitesmoke" sx={{ marginY: "10px", fontSize: "18px" }}>
            Top Charts
          </Typography>
          <PlayCircleIcon sx={{ color: "#E53E3E" }} onClick={handleTopChartClick} />
        </Stack>
        <List sx={{ minWidth: "100%" }}>
          {data.map((value, index) => (
            <ListItem
              className="topchartsList"
              sx={{}}
              onClick={() => handleClick(value._id)}
              key={value._id}
              disableGutters
              secondaryAction={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "15px",
                  }}

                >
                  <Typography sx={{ marginRight: "10px" }}>
                    {secondsToMinutes(value.duration)}
                  </Typography>
                  <ToggleButton value="Heart" sx={{ color: "white" }}>
                    <FavoriteBorderIcon />
                  </ToggleButton>
                </div>
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "15px",
                }}
              >
                <Typography>{index + 1}</Typography>
              </div>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  alt="Jealous"
                  src={value.coverimage}
                />
              </ListItemAvatar>
              <ListItemText
                className="textwrap60"
                primary={value.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="grey"
                    >
                      {value.artist}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <div className="musiccategories">
        <h4>Categories</h4>
        <ImageList cols={2} rowHeight={100} sx={{ margin: "3px" }}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{ margin: "3px", borderRadius: "7px" }}
              onClick={()=>navigateToCategory(item)}
              // onClick={() => handleCategoryClick(value._id)}
            >
              <img
                src={`${item.img}?w=164&h=100&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=100&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background: "#0000008a",
                  textAlign: "Center",
                  height: 100,
                  borderRadius: "7px",
                }}
                title={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Bollywood",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Chill",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Podcast",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Romance",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hip Hop",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Rock",
  },
];
