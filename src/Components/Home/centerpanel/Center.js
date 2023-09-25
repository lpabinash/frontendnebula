import React from 'react'
import './center.scss'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Typography,Box,Button } from '@mui/material';
import Playlist from './Playlist';
export default function Center() {
  return (
    <div className='subCont'>
      <br/>
    <div className='universalSearch'>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      className='search'
    >
      <InputBase
        fullWidth
        sx={{ ml: 1, flex: 1,color:"white" }}
        placeholder="Search..."
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon sx={{color:"whitesmoke"}}/>
      </IconButton>
    </Paper>
    </div>
    <hr/>
    <Box className='bgGrad' sx={{ display: 'flex',flexDirection:'column', justifyContent: 'end',padding:"0 0 20px 10px" }}>
    <Typography variant="h4" align="left" className='sub'>
      Amazing Playlists
    </Typography>
    <Typography variant="Subtitle2" align="left" className='sub2'>
      Listen to the best playlists curated by us and our users.
    </Typography>
    <Button className='listenNowBtn'  style={{textTransform: 'none'}}>Listen Now</Button>
    </Box>
    <br/><br/>
    <Playlist/>
    </div>
  )
}
