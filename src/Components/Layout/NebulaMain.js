import React from "react";
import Leftslidebar from "../Home/leftpanel/Leftslidebar";
import Center from "../Home/centerpanel/Center";
import Rightslidebar from "../Home/rightpanel/Rightslidebar";
import { Grid } from "@mui/material";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import BroswerPanel from "../Home/Browse/BrowserPanel";
function NebulaMain() {
  return (
    <React.Fragment>
      <div style={{display:"flex"}}>
        <div style={{width:"20vw"}} className="sidebarCont">
      <Leftslidebar />
      </div>
        {/* <Grid item className="mainGrid" sx={{marginLeft:"20%"}} xs={12} md={10} lg={10}> */}
        <div className="mainGrid">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Center />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Rightslidebar />
        </Grid>
      </Grid>
      </div>
         {/* </Grid> */}
        {/* <Grid item className="mainGrid" xs={12} md={9} lg={9}>
          <BroswerPanel />
        </Grid> */}
      </div>
      {/* <AudioPlayer /> */}
    </React.Fragment>
  );
}

export default NebulaMain;
