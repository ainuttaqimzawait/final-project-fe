import { getProducts } from "../../api/products";
import {FETCHING_PRODUCT} from "./constants"

export const fetchingProduct = (payload) => ({
    type: FETCHING_PRODUCT,
    payload
})

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const params = {
      page: ,
      sorting: 
      categories: 
      search_name: none
    }
    try {
            let { data: { data, count } } = await getProducts(params);
            dispatch(fetchingProduct({ data, count }));
        } catch (error) {
            console.log(error)
        }
  }
}