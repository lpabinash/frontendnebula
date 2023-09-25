import React, { useEffect, useState } from "react";
import { TextField, FormControl, Button, Select, MenuItem, InputLabel } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import AuthService from "../../services/AuthService";
import axios from "axios";

export default function UploadPage() {
  const [result, setResult] = useState("");
  const [duration, setDuration] = useState(0);
  const [songCategory, setSongCategory] = useState([]);
  const [songType, setSongType] = useState("");

  useEffect(() => {
    getAllMusicCategory();
  }, []);

  const getAllMusicCategory = () => {
    axios.get(AuthService.API_Category_Getlist).then((response) => {
      setSongCategory(response.data);
    });
  };
  const handleChangeArtist = (e) => {
    console.log(e.target.value)
    setSongType(e.target.value);
  }

  const handleChange = (e) => {
    const files = e.target.files;
    for (const file of files) {
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      });

      const audio = document.createElement("audio");
      audio.src = file.preview;

      audio.addEventListener("loadedmetadata", () => {
        console.log(file);
        setDuration(audio.duration);
      });
    }
  }
  const handleImageUpload = (event) => {
    event.preventDefault();
    console.log(event);
    const files = event.currentTarget["fileInput"].files;
    const title = event.currentTarget["title"].value;
    const artist = event.currentTarget["artist"].value;
    const musictype = songType;
    const language = event.currentTarget["language"].value;
    const coverimage = event.currentTarget["coverimage"].value;
    console.log(files,title,artist,musictype,language,coverimage)

    for (const file of files) {
      const formData = new FormData();
      formData.append("url", file);
      formData.append("title", title);
      formData.append("duration", duration);
      formData.append("artist", artist);
      formData.append("musictype", musictype);
      formData.append("language", language);
      formData.append("coverimage", coverimage);


      fetch("http://localhost:5001/music/add", {
        method: "POST",
        //   headers: new Headers({
        //     'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcklkIjoiNjUwODI4ZDc2MDQwZjVjM2ZjODYzMDMzIiwiaWF0IjoxNjk1MDM2NzA2LCJleHAiOjE2OTUwNzI3MDZ9.Yr7qz-oJkYvmRqDNsg0jWhQIvflq0E5MOsXFUa--IKo', 
        // }),
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          setResult(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div>
      <br />
      <br />
      Result:
      <br />
      <pre style={{ color: "white" }}>{result == "" ? "Unknown" : JSON.stringify(result) != {} ? "Uploaded" : "Failed"}</pre>
      <React.Fragment>
        <form autoComplete="off" style={{ backgroundColor: "white", padding: "45px 20px" }} onSubmit={handleImageUpload}>
          <TextField
            required
            variant="outlined"
            color="primary"
            type="file"
            sx={{ mb: 3 }}
            fullWidth
            id="fileInput"
            onChange={handleChange}
          />
          <TextField
            label="title"
            id="title"
            required
            variant="outlined"
            color="secondary"
            type="Text"

            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label="artist"
            id="artist"
            required
            variant="outlined"
            color="secondary"
            type="Text"

            fullWidth
            sx={{ mb: 3 }}
          />
          {/* <TextField
            label="musictype"
            required
            id="musictype"
            variant="outlined"
            color="secondary"
            type="Text"

            fullWidth
            sx={{ mb: 3 }}
          /> */}
          <FormControl fullWidth>
            <InputLabel id="musictype-label">Music Category *</InputLabel>
            <Select
              id="musictype"
              labelId="musictype-label"
              value={songType}
              label="Music Category"
              required
              sx={{ mb: 3 }}
              fullWidth
              onChange={handleChangeArtist}
            >
              {songCategory.map((curr, index) => (
                <MenuItem value={curr.name}>{curr.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="language"
            required
            id="language"
            variant="outlined"
            color="secondary"
            type="Text"

            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            label="coverimage"
            required
            variant="outlined"
            color="secondary"
            type="Text"
            id="coverimage"
            fullWidth
            sx={{ mb: 3 }}
          />

          <Button variant="outlined" color="secondary" type="submit">Upload</Button>

        </form>
      </React.Fragment>
    </div>
  );
}
