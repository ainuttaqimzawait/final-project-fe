import { DETAIL_ITEM } from './constan';

let initialState = {
    data: []
}
export default function detailReducer(state = initialState, { type, payload }) {
    switch (type) {

        case DETAIL_ITEM:
            let sate = { ...state, data: payload.detailProduct }
            // console.log(sate)
            return sate
        // return { ...state, data: payload.data }

        default:
            return state
    }
}
