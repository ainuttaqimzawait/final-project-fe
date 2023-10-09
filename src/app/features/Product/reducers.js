import { SEARCH_NAME, SET_LOADING, SET_PAGE, START_FETCHING_PRODUCT, SUCCESS_FETCHING_PRODUCT, TOGGLE_CATEGORY } from "./constants"

const statusList = {
    idle: 'idle',
    proccess: 'proccess',
    success: 'success',
    error: 'error'
}

let initialState = {
    data: [],
    currentPage: 1,
    sorting: 'Lates',
    categories: 'all',
    search_name: 'none',
    status: statusList.idle
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_PRODUCT:
            return { ...state, status: statusList.proccess }
        case SUCCESS_FETCHING_PRODUCT:
            let sate = { ...state, status: statusList.success, data: [...state.data, ...action.payload.aaData] }
            // console.log(sate);
            return sate
        case TOGGLE_CATEGORY:
            return { ...state, categories: action.payload.categories, data: [], search_name: 'none' }
        case SEARCH_NAME:
            return { ...state, search_name: action.payload.search_name, data: [], categories: 'all' }
        case SET_PAGE:
            return { ...state, currentPage: state.currentPage + 1 }
        default:
            return state
    }
}

export default productReducer