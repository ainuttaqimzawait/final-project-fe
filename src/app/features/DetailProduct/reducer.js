import { DETAIL_ITEM } from './constan';

let initialState = {
    data: []
}
export default function detailReducer(state = initialState, { type, payload }) {
    switch (type) {

        case DETAIL_ITEM:
            return { ...state, data: payload.detailProduct }
        default:
            return state
    }
}
