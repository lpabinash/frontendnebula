import React,{useEffect} from 'react'
import { Grid,Card,Typography,List,ListItem,ToggleButton,Avatar,ListItemText,ListItemAvatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Leftslidebar from '../Home/leftpanel/Leftslidebar';
import { useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { getCategorySearchStart,getTrackStart } from '../../store/slices/musicSlice';
import { createAction } from '@reduxjs/toolkit';


function Category() {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const getPlayStart = createAction('music/getPlayStart');
    const getPlaylistPlayingStart = createAction('music/getPlaylistPlayingStart');


    useEffect(() => {
        // getAllMusicList();
        dispatch(getCategorySearchStart({"musictype":state.item.title}))
      }, []);
    const data= useSelector((state)=>state.music.musics)
    console.log(data)

    function secondsToMinutes(time) {
        return Math.floor(time / 60) + ':' + Math.floor(time % 60);
      }


      const handleClick=(id)=>{
        dispatch(getPlaylistPlayingStart(data))
        let music=data.filter((track)=> track._id==id)
        let index = data.findIndex(x => x._id ===music[0]._id);
        // dispatch(getMusicStart(music))
        dispatch(getTrackStart(index))
        dispatch(getPlayStart(true))

      }

    
      
  return (
    <div style={{color:"white"}}>      
    <Grid container>
    <Grid item xs={0} sm={0} md={3} lg={3} className="sidebar">
      <Leftslidebar />
    </Grid>
    <Grid item className="mainGrid" xs={12} md={9} lg={9}>
    <Card orientation="horizontal"  variant="outlined" sx={{minWidth: 100,backgroundColor:"transparent"}} className='artistcontainer'>
            <img
              src={`${state.item.img}?h=120&fit=crop&auto=format`}
              srcSet={`${state.item.img}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={state.item.title}
              width="20%"
            />
        </Card>
        <List sx={{ minWidth: "100%" }}>
          {data.map((value, index) => (
            <ListItem
              className="topchartsList"
              sx={{}}
              onClick={()=>handleClick(value._id)}
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
     </Grid>
     
    {/* <Grid item className="mainGrid" xs={12} md={9} lg={9}>
      <BroswerPanel />
    </Grid> */}
  </Grid></div>
  )
}

export default Category