import * as API from 'api/index'

export function getBallUrl(index){
    return dispatch => {
        dispatch(startBallLoader(index))
        API.getBall()
        .then((response) => {
            dispatch(stopBallLoader(index))
            dispatch(changeBallImage(index, response.data.ball_url))
        })
        .catch((error) => {
            dispatch(stopBallLoader(index))
        })
    }
}

function changeBallImage(index, url) {
    return {
        type: "CHANGE_BALL_IMAGE",
        index,
        url
    }
}

function stopBallLoader(index) {
    return {
        type: "STOP_BALL_LOADER",
        index
    }
}

function startBallLoader(index) {
    return {
        type: "START_BALL_LOADER",
        index
    }
}