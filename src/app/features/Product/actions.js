import { type } from "@testing-library/user-event/dist/type";
import { getProducts } from "../../api/products";
import { FETCHING_PRODUCT, SET_LOADING, SET_PAGE, TOGGLE_CATEGORY } from "./constants";

export const fetchingProduct = (payload) => ({
    type: FETCHING_PRODUCT,
    payload
})

// export const setLoading = () => ({
//     type: SET_LOADING
// })

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        // dispatch({ type: 'SET_LOADING' });
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
            // console.log(aaData);

            dispatch(fetchingProduct({ aaData }));
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

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: {
        currentPage: page
    }
})