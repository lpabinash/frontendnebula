import { call, put, takeEvery,apply } from 'redux-saga/effects';
import AuthService from "../../services/AuthService";
import * as actions from '../slices/musicSlice'
import axios from 'axios';

function* getMusics() {
    try {
        const response = yield call(axios.get, AuthService.API_Music_Getlist);
        yield put(actions.getMusicsSuccess(response.data))
    } catch (error) {
        yield put(actions.getMusicsFailure());
    }
}
function* getPlay(action) {
    try {
        yield put(actions.getPlaySuccess(action.payload))
    } catch (error) {
        yield put(actions.getPlayFailure());
    }
}

function* getIndex(action) {
    try {
        yield put(actions.getTrackSuccess(action.payload))
    } catch (error) {
        yield put(actions.getTrackFailure());
    }
}

function* getArtistSearch(action) {
    try {
        const response = yield call(axios.post, AuthService.API_Music_ArtistSearch,action.payload);
        yield put(actions.getArtistSearchSuccess(response.data))
    } catch (error) {
        yield put(actions.getArtistSearchFailure());
    }
}

function* getCategorySearch(action) {
    try {
        const response = yield call(axios.post, AuthService.API_Music_CategorySearch,action.payload);
        yield put(actions.getCategorySearchSuccess(response.data))
    } catch (error) {
        yield put(actions.getCategorySearchFailure());
    }
}

function* getMusicPlaying(action) {
    try {
        yield put(actions.getMusicPlayingSuccess(action.payload))
    } catch (error) {
        yield put(actions.getMusicPlayingFailure());
    }
}

function* getPlaylistPlaying(action) {
    try {
        yield put(actions.getPlaylistPlayingSuccess(action.payload))
    } catch (error) {
        yield put(actions.getPlaylistPlayingFailure());
    }
}
function* musicSaga() {
    yield takeEvery('music/getMusicsStart', getMusics);
    yield takeEvery('music/getPlayStart', getPlay);
    yield takeEvery('music/getTrackStart', getIndex);
    yield takeEvery('music/getArtistSearchStart', getArtistSearch);
    yield takeEvery('music/getMusicPlayingStart',getMusicPlaying);
    yield takeEvery('music/getCategorySearchStart',getCategorySearch);
    yield takeEvery('music/getPlaylistPlayingStart',getPlaylistPlaying);
}
export default musicSaga;
