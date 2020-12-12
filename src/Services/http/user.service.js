import axios from 'axios';

const URL = 'http://localhost:3000'

export const signUp = (username, password) => {
    return axios.post(`${URL}/v1/public/signup`,{ username, password})
}

export const logIn = (username, password) => {
    return axios.post(`${URL}/v1/public/login`,{ username, password})
}

export const updateProfile = (data) => {
    return axios.post(`${URL}/v1/profile`,data)
}

export const getProfile = () => {
    return axios.get(`${URL}/v1/profile`)
}