import { getProducts } from "../../api/products";
import { SEARCH_NAME, SET_PAGE, START_FETCHING_PRODUCT, SUCCESS_FETCHING_PRODUCT, TOGGLE_CATEGORY } from "./constants";

export const startFetchingProduct = () => ({
    type: START_FETCHING_PRODUCT,
})

export const successFetchingProduct = (payload) => ({
    type: SUCCESS_FETCHING_PRODUCT,
    payload
})

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingProduct());
        let currentPage = getState().products.currentPage || 1;
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
            dispatch(successFetchingProduct({ aaData }));
        } catch (error) {
            console.log(error)
        }
    }
}

export const toggleCategories = (categories) => ({
    type: TOGGLE_CATEGORY,
    payload: {
        categories: categories
    }
})

export const keywordProduct = (keyword) => ({
    type: SEARCH_NAME,
    payload: {
        search_name: keyword
    }
})

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: {
        currentPage: page
    }
})