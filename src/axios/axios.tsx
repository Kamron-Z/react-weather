import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

api.interceptors.request.use(config => {
    config.url = config.url + '&units=metric' + '&appid=' + 'c7f8a8e321495b9d4dd38841f509797c'
    return config
})

export default api