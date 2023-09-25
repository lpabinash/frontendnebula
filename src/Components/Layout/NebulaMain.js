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
      <Grid container>
        <Grid item xs={0} sm={0} md={3} lg={3} className="sidebar">
          <Leftslidebar />
        </Grid>
        <Grid item className="mainGrid" xs={12} md={9} lg={9}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Center />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Rightslidebar />
        </Grid>
      </Grid>
         </Grid>
        {/* <Grid item className="mainGrid" xs={12} md={9} lg={9}>
          <BroswerPanel />
        </Grid> */}
      </Grid>
      {/* <AudioPlayer /> */}
    </React.Fragment>
  );
}

export default NebulaMain;
