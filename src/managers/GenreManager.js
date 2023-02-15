export const getGenres = () => {
    return fetch("http://localhost:8000/genres", {
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}