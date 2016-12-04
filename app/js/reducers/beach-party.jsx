class Ball {
    constructor(coordinates, size, imageUrl=null, requests=0) {
        this.coordinates = coordinates
        this.size = size
        this.imageUrl = imageUrl
        this.requests = requests
    }
}

const initialState = {
    balls: [
        new Ball({x: 100, y: 60 }, "medium"),
        new Ball({x: 250, y: 100}, "x-large"),
        new Ball({x: 450, y: 70}, "large"),
        new Ball({x: 600, y: 30}, "medium"),
        new Ball({x: 760, y: 80}, "large"),
        new Ball({x: 900, y: 50}, "small"),

        new Ball({x: 100, y: 250}, "large"),
        new Ball({x: 250, y: 350}, "small"),
        new Ball({x: 500, y: 250}, "medium"),
        new Ball({x: 640, y: 220}, "x-large"),
        new Ball({x: 900, y: 300}, "small"),

        new Ball({x: 30, y: 400}, "x-large"),
        new Ball({x: 300, y: 500}, "medium"),
        new Ball({x: 430, y: 400}, "small"),
        new Ball({x: 600, y: 450}, "large"),
        new Ball({x: 800, y: 450}, "small")
    ]
}

function updateBallUrl(balls, index, url) {
    const oldBall = balls[index]
    const newBall = new Ball(oldBall.coordinates, oldBall.size, url, oldBall.requests )
    return [
        ...balls.slice(0, index),
        balls[index] = newBall,
        ...balls.slice(index + 1)
    ]
}

function updateBallLoading(balls, index, requestChange ) {
    const oldBall = balls[index]
    const newRequests = oldBall.requests + requestChange
    const newBall = new Ball(oldBall.coordinates, oldBall.size, oldBall.imageUrl, newRequests)
    return [
        ...balls.slice(0, index),
        balls[index] = newBall,
        ...balls.slice(index + 1)
    ]
}

export default function BeachParty(state=initialState, action) {
    switch (action.type) {
        case "CHANGE_BALL_IMAGE":
            return Object.assign({}, state, {
                balls: updateBallUrl(state.balls, action.index, action.url)
            })
        case "START_BALL_LOADER":
            return Object.assign({}, state, {
                balls: updateBallLoading(state.balls, action.index, 1)
            })
        case "STOP_BALL_LOADER":
            return Object.assign({}, state, {
                balls: updateBallLoading(state.balls, action.index, -1)
            })    
        default: 
            return state
    }
}