import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getGenres } from "../../managers/GenreManager.js"


export const GenreList = () => { 

    const [genres, setGenres] = useState([])

    useEffect(() => { 
        getGenres().then(data => setGenres(data))
    }, []
    )

    return (<>
        <h2>Genres</h2>
        <div className="genreList">
            {
                genres.map(genre => { 
                    return <section key={`genre--${genre.id}`} className="genre">
                        <div className="genreName">{genre.description}</div>
                    </section>
                })
            }
        </div>
        </>)
}