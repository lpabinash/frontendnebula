import React from 'react'
import { Card,item,Box,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Artists({artists}) {
  const navigate = useNavigate();
  const navigateToArtist=(artist)=>{
    navigate('/artist/'+artist.name,{ state: { artist } })
  }
  return(
    <Box
      sx={{
        display: 'flex',
        gap: 5,
        py: 1,
        overflow: 'auto',
        width: "100%",
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {artists.map((item) => (
        // <Link to={`artist/${item.name}`}>
        <Card orientation="horizontal" key={item.id} variant="outlined" sx={{minWidth: 100,backgroundColor:"transparent"}} className='artistcontainer' onClick={()=>navigateToArtist(item)}>
            <img
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              width="100%"
            />
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }} textAlign="center">
            <Typography level="body-sm" className='commontypo'>{item.name}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  )
}

export default Artists
