import React, { useState } from "react";
import Box from "@mui/material/Box";
import TrackCarousel from "./TrackCarousel";
import { Typography,Stack } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Artists from "./Artists";
export default function Playlist() {
  const tracks = [
    { id: 0, title: "Fall", singer:"Davido",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73" },
    { id: 1, title: "Lady", singer:"Rema",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73" },
    { id: 2, title: "In My Feelings", singer:"Drake",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 3, title: "Fall", singer:"Davido",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 4, title: "Lady", singer:"Rema",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 5, title: "In My Feelings", singer:"Drake",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 6, title: "Fall", singer:"Davido",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 7, title: "Lady", singer:"Rema",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 8, title: "In My Feelings", singer:"Drake",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 9, title: "Fall", singer:"Davido",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fcommando.jpg?alt=media&token=0ffeb992-73f9-45db-8dad-5e4baaca55c9" },
    { id: 10, title: "Cheap Thrills", singer:"Sia",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Ftia.jpg?alt=media&token=417a794a-5def-45a9-9d89-3193adba46fa" },
    { id: 11, title: "In My Feelings", singer:"Drake",src: "https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fcovers%2Fagt.jpg?alt=media&token=458d8ea1-2fbd-426f-a105-43010d25ce73" },
  ];

  const artists=[
    {id:0,name:"CKay",src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fckay.jpg?alt=media&token=04b5367b-2c2a-4934-ad07-85ae7b8cf6f3"},
    {id:1,name:"Arijit",src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fckay.jpg?alt=media&token=04b5367b-2c2a-4934-ad07-85ae7b8cf6f3"},
    {id:2,name:"Imagine Dragons", src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fimagine_dragons.jpg?alt=media&token=d7c9e9d2-eff9-48f1-9eda-dfe66d0fe72f"},
    {id:3,name:"CKay",src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fckay.jpg?alt=media&token=04b5367b-2c2a-4934-ad07-85ae7b8cf6f3"},
    {id:4,name:"Imagine Dragons", src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fimagine_dragons.jpg?alt=media&token=d7c9e9d2-eff9-48f1-9eda-dfe66d0fe72f"},
    {id:5,name:"CKay",src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fckay.jpg?alt=media&token=04b5367b-2c2a-4934-ad07-85ae7b8cf6f3"},
    {id:6,name:"Imagine Dragons", src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fimagine_dragons.jpg?alt=media&token=d7c9e9d2-eff9-48f1-9eda-dfe66d0fe72f"},
    {id:7,name:"Imagine Dragons", src:"https://firebasestorage.googleapis.com/v0/b/socialstream-ba300.appspot.com/o/music_app_files%2Fartistes%2Fimagine_dragons.jpg?alt=media&token=d7c9e9d2-eff9-48f1-9eda-dfe66d0fe72f"}
  ]
    return (
      <>
      
          <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="h5"  component="h5" align="left" color="whitesmoke" sx={{marginY:"10px"}}>
            New Releases 
          </Typography>
          <PlayCircleIcon sx={{color:"#E53E3E"}}/>
        </Stack>
      <TrackCarousel tracks={tracks} />
      <br/><br/>
      <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="h5"  component="h5" align="left" color="whitesmoke" sx={{marginY:"10px"}}>
            You May Like
          </Typography>
        </Stack>
      <Artists artists={artists} />
      <br/><br/>
      <Stack direction="row" alignItems="center" gap={1}>
          <Typography variant="h5"  component="h5" align="left" color="whitesmoke" sx={{marginY:"10px"}}>
            People Around You
          </Typography>
          <PlayCircleIcon sx={{color:"#E53E3E"}}/>
        </Stack>
      <TrackCarousel tracks={tracks} />
      </>
      
    )
  
}