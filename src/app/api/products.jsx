import axios from "axios"
import { config } from "../../config"


export const getProducts = async (params) => {
    return await axios.get(`${config.url}/public/hijja/product`, { params })
}

export const getDetailProduct = async (id) => {
    return await axios.get(`${config.url}/public/hijja/single/${id}`)
}

export const getVarian = async (id) => {
    return await axios.get(`${config.url}/public/hijja/varian/${id}`)
}

export const getCategoriess = async () => {
    return await axios.get(`${config.url}/public/hijja/cat`)
}

export const getKeyword = async () => {
    return await axios.get(`${config.url}/public/hijja/categories`)
}
