import React, { useEffect, useState } from 'react'
import NebulaPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./audioPlayer.scss";
import { ToggleButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AuthService from '../../services/AuthService';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit'

export default function AudioPlayer() {

    const musicTracks  = useSelector((state) =>  (state.music.playlist));
    const dispatch = useDispatch();
    const getTrackStart = createAction('music/getTrackStart');
    const getMusicPlayingStart = createAction('music/getMusicPlayingStart');
    const play=useSelector((state)=>state.music.play)
    const musicPlaying=useSelector((state)=>state.music.music)


    // useEffect(() => {
    //     dispatch(getMusicsStart())
    //   }, []);


    // const [trackIndex, setTrackIndex] = useState(0);
    const trackIndex=useSelector((state)=>state.music.track)
    const handleClickPrevious = () => {
        const index=trackIndex === 0 ? musicTracks.length - 1 : trackIndex - 1
        dispatch(getTrackStart(index))
    };

    const handleClickNext = () => {
        const index=trackIndex < musicTracks.length - 1 ? trackIndex + 1 : 0
        dispatch(getTrackStart(index))
    };

    return (
        <div className='AudioPlayer'>
       { play && <NebulaPlayer
                // style={{ width: "300px" }}
                style={{
                    borderRadius: "1rem", background: "#000000a3",
                    borderColor: "#52525b", backdropFilter: "blur(15px)",
                    boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.2)",
                    color: "white"
                }}
                layout="stacked-reverse"
                src={musicTracks[trackIndex]?.url}
                onPlay={(e) => dispatch(getMusicPlayingStart(musicTracks[trackIndex]))}
                showSkipControls={true}
                showFilledVolume={true}
                showJumpControls={false}
                header={`Now playing: ${musicPlaying?.title}`}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
                autoPlay
                customVolumeControls={[
                    <div>
                        <FavoriteBorderIcon sx={{ color: 'white', mr: "10px" }} />
                        <FavoriteIcon sx={{ color: 'red', mr: "10px" }} />
                    </div>,
                    RHAP_UI.VOLUME
                ]}
            // other props here
            />}
        </div>
    )
}
