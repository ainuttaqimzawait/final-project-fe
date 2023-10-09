import { DETAIL_ITEM } from "./constan";

export const getDetailItem = (payload) => {
    return (dispatch) => {
        try {
            let { detailProduct } = payload
            // console.log({ detailProduct });
            dispatch(detailItem({ detailProduct }));
        } catch (error) {
            console.log(error)
        }
    }
}

export const detailItem = (payload) => ({
    type: DETAIL_ITEM,
    payload
})