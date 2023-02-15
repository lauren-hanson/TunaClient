import { Route, Routes } from "react-router-dom"
import { ArtistList } from "../components/artist/ArtistList"
import { GenreList } from "../components/genre/GenreList"
import { SongList } from "../components/song/SongList"

export const ApplicationViews = () => { 
    return <>
        <Routes>
            <Route path="/artists" element={<ArtistList /> }  /> 
            <Route path="/genres" element={<GenreList /> }  /> 
            <Route path="/songs" element={<SongList /> }  /> 
        </Routes>
        </>
}