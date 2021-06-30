import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: "Kill me softly", duration: "4:21" },
        { title: "Smile", duration: "4:00" },
        { title: "Lost stars", duration: "3:52" },
        { title: "Harder", duration: "2:49" },
        { title: "Overhaul", duration: "3:33" },
        { title: "Sweet bullets", duration: "2:50" },
        { title: "I love you", duration: "2:55" }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});