import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./LoginComponent.scss";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Link, useLocation } from "react-router-dom";
import AuthService from "../../services/AuthService";
import axios from "axios";
import App from "../../App";


export default function LoginComponent() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const { from } = location.state;
  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginDetails = {
      username: data.get("username"),
      password: data.get("password"),
    };

    axios
      .post(AuthService.API_Login, loginDetails)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(JSON.stringify(response.data));
        alert("Login Successfull");
      }).catch((err) => {
        alert("Login failed");
      });
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            bgcolor: "#27272A",
            height: 80,
          }}
          variant="regular"
        >
          <IconButton edge="start" aria-label="menu">
            <MusicNoteIcon
              sx={{ marginRight: "15px", color: "red" }}
              fontSize="large"
            />
          </IconButton>
          <Typography
            fontWeight={900}
            variant="h6"
            color="inherit"
            component="div"
          >
            Nebula
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="loginContainer" component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Typography
            sx={{
              alignItems: "left",
              paddingTop: "30px",
              fontWeight: "bolder",
            }}
            component="h1"
            variant="h5"
          >
            {isLogin ? "Register" : "Login"}
          </Typography>
          <Typography
            sx={{
              alignItems: "left",
            }}
            variant="body2"
          >
            To continue enjoying Nebula
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 5 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              InputLabelProps={{
                style: { color: "grey" },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: "grey" },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#e53e3e;",
                color: "black",
                "&:hover": {
                  borderColor: "grey",
                  bgcolor: "#e53e3e",
                  boxShadow: "none",
                },
              }}
              disableRipple
            >
              {isLogin ? "Register" : "Login"}
            </Button>
            <Grid
              container
              sx={{
                marginTop: "50px",
              }}
            >
              <Grid item xs>
                <Link id="link1" to={from} variant="body2">
                  Continue without logging in
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="body2" color={"grey"}>
                  {isLogin
                    ? "Already have an account?"
                    : "Don't have an account yet?"}
                  <Link
                    onClick={handleClick}
                    id="link1"
                    href="#"
                    variant="body2"
                  >
                    {isLogin ? " Login" : " Register"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
