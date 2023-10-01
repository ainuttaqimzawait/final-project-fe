import { FETCHING_PRODUCT } from "./constants"

let initialState = {
    data: [],
    currentPage: 1,
    // totalItems: -1,
    perPage: 25,
    sorting: 'Lates',
    categories: 'all',
    search_name: 'none'
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCHING_PRODUCT:
            let sate = { ...state, data: payload.aaData }
            // console.log(sate);
            return sate
        default:
            return state
    }
}

export default productReducer