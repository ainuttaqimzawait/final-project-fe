import { getProducts } from "../../api/products";
import { FETCHING_PRODUCT } from "./constants";

export const fetchingProduct = (payload) => ({
    type: FETCHING_PRODUCT,
    payload
})

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        let currentPage = getState().products.page || 1;
        let sorting = getState().products.sorting || 'Lates';
        let categories = getState().products.categories || 'all';
        let search_name = getState().products.search_name || 'none';
        const params = {
            page: currentPage,
            sorting: sorting,
            categories: categories,
            search_name: search_name
        }
        try {
            let { data: { aaData } } = await getProducts(params);
            // console.log({ aaData });

            dispatch(fetchingProduct({ aaData }));
        } catch (error) {
            console.log(error)
        }
    }
}

