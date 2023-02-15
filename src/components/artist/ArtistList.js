import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getArtists } from "../../managers/ArtistManager.js"


export const ArtistList = () => { 

    const [artists, setArtists] = useState([])

    useEffect(() => { 
        getArtists().then(data => setArtists(data))
    }, []
    )

    return (<>
        <h2>Artists</h2>
        <div className="artistList">
            {
                artists.map(artist => { 
                    return <section key={`artist--${artist.id}`} className="artist">
                        <div className="artistName">{artist.name}</div>
                    </section>
                })
            }
        </div>
        </>)
}