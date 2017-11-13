import axios from 'axios' 

const post = (url, data, config = {}) => {
    return axios.post(url, data, config)
}

const get = (url) => {
    return axios(url)
}


const HttpClient = {
    post,
    get
}

export {HttpClient}