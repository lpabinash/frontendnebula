import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    musics: [],
    loading: false,
    error: false,
    music: {},
    track:0,
    play:false,
    playlist:[]
}
const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers:{
        getMusicsStart: (state) =>{
            state.loading = true;
        },
        getMusicsSuccess: (state, action) =>{
            state.loading = false;
            state.musics = action.payload;
        },
        getMusicsFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        getPlayStart: (state) =>{
            state.loading = true;
        },
        getPlaySuccess: (state, action) =>{
            state.loading = false;
            state.play = action.payload;
        },
        getPlayFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        getTrackStart: (state) =>{
            state.loading = true;
        },
        getTrackSuccess: (state, action) =>{
            state.loading = false;
            state.track = action.payload;
        },
        getTrackFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        getArtistSearchStart: (state) =>{
            state.loading = true;
        },
        getArtistSearchSuccess: (state, action) =>{
            state.loading = false;
            state.musics = action.payload;
        },
        getArtistSearchFailure: (state) =>{
            state.loading = false;
            state.error = true;
        }
        ,
        getMusicPlayingStart: (state) =>{
            state.loading = true;
        },
        getMusicPlayingSuccess: (state, action) =>{
            state.loading = false;
            state.music = action.payload;
        },
        getMusicPlayingFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        getCategorySearchStart: (state) =>{
            state.loading = true;
        },
        getCategorySearchSuccess: (state, action) =>{
            state.loading = false;
            state.musics = action.payload;
        },
        getCategorySearchFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },
        getPlaylistPlayingStart: (state) =>{
            state.loading = true;
        },
        getPlaylistPlayingSuccess: (state, action) =>{
            state.loading = false;
            state.playlist = action.payload;
        },
        getPlaylistPlayingFailure: (state) =>{
            state.loading = false;
            state.error = true;
        },

    }
})

const musicReducer = musicSlice.reducer;
export const {getMusicsStart, getMusicsSuccess, getMusicsFailure, getPlayStart, getPlaySuccess, getPlayFailure,getTrackStart,getTrackFailure,getTrackSuccess,getArtistSearchFailure,getArtistSearchStart,getArtistSearchSuccess,getMusicPlayingFailure,getMusicPlayingStart,getMusicPlayingSuccess,getCategorySearchFailure,getCategorySearchStart,getCategorySearchSuccess,getPlaylistPlayingFailure,getPlaylistPlayingStart,getPlaylistPlayingSuccess} = musicSlice.actions;
export default musicReducer



