export const getArtists = () => {
    return fetch("http://localhost:8000/artists", {
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}