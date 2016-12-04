import * as API from 'api/index'

export function getBallUrl(){
    return dispatch => {
        dispatch({
            type: "FETCH_BALL",
            payload: API.getBall(),
        })
    }
}

export function changeBallImage(index, url) {
    return {
        type: "CHANGE_BALL_IMAGE",
        index,
        url
    }
}