import { FETCHING_PRODUCT, SET_LOADING, SET_PAGE, TOGGLE_CATEGORY } from "./constants"

let initialState = {
    data: [],
    currentPage: 1,
    // loading: false,
    // perPage: 25,
    sorting: 'Lates',
    categories: 'all',
    search_name: 'none'
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_PRODUCT:
            let sate = { ...state, data: [...state.data, ...action.payload.aaData] }
            // console.log(sate);
            console.log('reducer 1');
            return sate
        case TOGGLE_CATEGORY:
            return { ...state, categories: action.payload.categories }
        // case SET_LOADING:
        //     return {
        //         ...state,
        //         loading: true,
        // }
        case SET_PAGE:
            return { ...state, currentPage: state.currentPage + 1 }
        default:
            return state
    }
}

export default productReducer