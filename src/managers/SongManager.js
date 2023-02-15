export const getSongs = () => {
    return fetch("http://localhost:8000/songs", {
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}