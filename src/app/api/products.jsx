import axios from "axios"
import { config } from "../../config"


const getProducts = async () => {
    return await axios.get(`${config.url}/public/hijja/product`)
}

export default getProducts