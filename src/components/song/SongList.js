import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getSongs } from "../../managers/SongManager.js"


export const SongList = () => { 

    const [songs, setSongs] = useState([])

    useEffect(() => { 
        getSongs().then(data => setSongs(data))
    }, []
    )

    return (<>
        <h2>Songs</h2>
        <div className="songList">
            {
                songs.map(song => { 
                    return <section key={`song--${song.id}`} className="song">
                        <div className="songName">{song.title}</div>
                    </section>
                })
            }
        </div>
        </>)
}