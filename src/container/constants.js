import axios from "axios"

export const imageApiCall = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://picsum.photos/v2/list?page=1&limit=16").then(response => {
            if (response.data) {
                resolve(response.data)
            }
        }).catch(error => reject(error))
    })
}