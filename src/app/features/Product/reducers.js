import { FETCHING_PRODUCT } from "./constants"

let initialState = {
    data: [],
    currentPage: 1,
    //totalItems: -1,
    //perPage: 25,
    sorting: '',
    categories: '',
    search_name: ''
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_PRODUCT:
            return {
                ...state, data: payload.data, totalItems: payload.count
            }
        default:
            return state
    }
}

export default productReducer