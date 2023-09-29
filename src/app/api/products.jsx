import axios from "axios"
import { config } from "../../config"


export const getProducts = async (params) => {
    return await axios.get(`${config.url}/public/hijja/product?page=2&sorting=Lates&categories=all&search_name=none`, { params })
}

export const getDetailProduct = async () => {
    return await axios.get(`${config.url}/public/hijja/single/28545`)
}

export const getVarian = async () => {
    return await axios.get(`${config.url}/public/hijja/varian/28545`)
}

export const getCategoriess = async () => {
    return await axios.get(`${config.url}/public/hijja/cat`)
}

export const getKeyword = async () => {
    return await axios.get(`${config.url}/public/hijja/categories`)
}
