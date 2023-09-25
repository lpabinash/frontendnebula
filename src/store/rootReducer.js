import { combineReducers } from "redux";
import musicReducer from "./slices/musicSlice";
const rootReducer = combineReducers({
    music: musicReducer,
})

export default rootReducer;