class Ball {
    constructor(coordinates, size, imageUrl=null) {
        this.coordinates = coordinates
        this.size = size
        this.imageUrl = imageUrl
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

function updateBalls(balls, index, url) {
    const oldBall = balls[index]
    const newBall = new Ball(oldBall.coordinates, oldBall.size, url )
    return [
        ...balls.slice(0, index),
        balls[index] = newBall,
        ...balls.slice(index + 1)
    ]
}

export default function BeachParty(state=initialState, action) {
    switch (action.type) {
        case "FETCH_BALL_FULFILLED":
            debugger
            return Object.assign({}, state)
        case "CHANGE_BALL_IMAGE":
            const balls = updateBalls(state.balls, action.index, action.url)
            return Object.assign({}, state, {balls: balls})
        default: 
            return state
    }
}