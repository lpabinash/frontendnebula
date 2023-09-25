import axios from "axios";
import jwt_decode from "jwt-decode";

class AuthService {

    serveraddress = this.isLocalServer() ? "https://backend-mhg5.onrender.com" : "https://backend-mhg5.onrender.com";

    API_Login = this.serveraddress + "user/login";
    API_Register = this.serveraddress + "user/register";
    API_UserDetails = this.serveraddress + "user/getdetails";

    //music
    API_Music_Getlist = this.serveraddress + "music/getlist";
    API_Music_Upload = this.serveraddress + "music/add";
    API_Music_GSD = this.serveraddress + "music/";
    API_Music_ArtistSearch = this.serveraddress + "music/artist"
    API_Music_CategorySearch = this.serveraddress + "music/category"

    //category
    API_Category_Getlist = this.serveraddress + "category/getlist";
    API_Category_Create = this.serveraddress + "category/add";

    //favorite
    API_Favorite_Getlist = this.serveraddress + "favorite/getlist/";
    API_Favorite_Create = this.serveraddress + "favorite/add";

    //playlist
    API_Playlist_Getlist = this.serveraddress + "playlist/getlist/";
    API_Playlist_Create = this.serveraddress + "playlist/create";


    // {
    //     "userType": "admin",
    //     "message": "Authentication Successful",
    //     "email": "ARCHIT@gmail.com",
    //     "token": "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJVRFlPRyIsInN1YiI6ImFuaWw1QGdtYWlsLmNvbSIsImlhdCI6MTY2NDAyOTk2OCwidXNlclR5cGUiOiJzZWVrZXIifQ.RkKOijfHkHeKPCoG_f9lArQJ85BhNozMdEByTgr6orA"
    // }x
    getUserDetails() {
        try {
            let user = JSON.parse(localStorage.getItem("userdetails"));
            if (user !== undefined && user !== null) {
                return user;
            }
        } catch {
            return "";
        }
        return "";
    }
    setUserDetails() {
        try {
            axios
                .get(this.API_UserDetails + "/" + this.getUserEmail())
                .then((response) => {
                    localStorage.setItem("userdetails", JSON.stringify(response.data.data))
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
        catch (err) {
            console.log(err);
        }
    }

    isLocalServer() {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
            return true;
        }
        return false
    }

    getServerAddress() {
        return this.serveraddress;
    }

    login(user) {
        try {
            localStorage.setItem("user", JSON.stringify(user));
        } catch {
            localStorage.removeItem("user");
        }
    }

    getToken() {
        try {
            console.log(JSON.parse(localStorage.getItem("user")))
            return JSON.parse(localStorage.getItem("user")).token;
        }
        catch {
            return "";
        }
    }

    decodeToken() {
        try {
            return jwt_decode(this.getToken());
        }
        catch {
            return "";
        }
    }

    getUserType() {
        try {
            var user = this.decodeToken();
            return user.userType;
        } catch {
            return "";
        }

    }
    getUsername() {
        try {
            var user = this.decodeToken();
            return user.username;
        } catch {
            return "";
        }

    }
    isLogedIn() {
        try {
            return this.getToken() !== "" ? true : false;
        }
        catch {
            return false;
        }
    }

    logout() {
        localStorage.removeItem("user");
    }
}
export default new AuthService();