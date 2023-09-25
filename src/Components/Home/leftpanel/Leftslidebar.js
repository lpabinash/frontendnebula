import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadsetIcon from "@mui/icons-material/Headset";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import AuthService from "../../../services/AuthService";

const drawerWidth = "24%";

// interface Props {
//   window?: () => Window;
// }

export default function Leftslidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      {/* <Toolbar /> */}
      <Divider />
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          // bgcolor: "#1A202C",
          color: "white",
        }}
      >
        <ListItem className="listItem">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "transparent" }}>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem className="listItem">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "transparent" }}>
              <GridViewIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Browse" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem className="listItem">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "transparent" }}>
              <HeadsetIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Playlist" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem className="listItem">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "transparent" }}>
              <FavoriteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Favorites" />
        </ListItem>
      </List>
      <Box sx={{ margin: "20px", mt: 5 }}>
        <Divider color="grey" variant="fullWidth" />
        {
          (AuthService.isLogedIn()) ? (
            <>
            <Link to="/profile" state={{ from: location.pathname, state: location.state }}>
              <Button
                sx={{
                  marginTop: 2,
                  color: "white",
                  borderColor: "gray",
                  "&:hover": {
                    borderColor: "gray",
                    boxShadow: "none",
                  },
                }}
                fullWidth
                variant="outlined"
                disableRipple
              >
                {AuthService.getUsername()}
              </Button>
            </Link>
              <Button
                sx={{
                  marginTop: 2,
                  color: "white",
                  borderColor: "gray",
                  "&:hover": {
                    borderColor: "gray",
                    boxShadow: "none",
                  },
                }}
                fullWidth
                variant="outlined"
                disableRipple
                onClick={()=>{
                  AuthService.logout();
                  alert("Logout Successfull");
                }}
              >
                "Log Out"
              </Button>
            </>
          ) : (
            <Link to="/login" state={{ from: location.pathname, state: location.state }}>
              <Button
                sx={{
                  marginTop: 2,
                  color: "white",
                  borderColor: "gray",
                  "&:hover": {
                    borderColor: "gray",
                    boxShadow: "none",
                  },
                }}
                fullWidth
                variant="outlined"
                disableRipple
              >
                Login
              </Button>
            </Link>
          )
        }

      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#1A202C",
        }}
      >
        {/* <Toolbar> */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon
            sx={{ color: "red", marginRight: "20px" }}
            fontSize="large"
          />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography fontWeight={900} variant="h4">
              Nebula
            </Typography>
          </Box>
        </IconButton>
        {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
        {/* </Toolbar> */}
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          // backgroundColor: "#1A202C",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#1A202C",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="h4">Nebula</Typography>
          </Box>
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#1A202C",
            },
          }}
          open
        >
          <Box
            sx={{
              display: "flex",
              color: "white",
              paddingTop: "25px",
              marginLeft: "20px",
            }}
          >
            <MusicNoteIcon
              sx={{ marginRight: "15px", color: "red" }}
              fontSize="large"
            />
            <Typography fontWeight={900} variant="h4">
              Nebula
            </Typography>
          </Box>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
