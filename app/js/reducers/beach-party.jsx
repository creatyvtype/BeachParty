class Ball {
    constructor(coordinates, size) {
        this.coordinates = coordinates
        this.size = size
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

export default function BeachParty(state=initialState, action) {
    switch (action.type) {
        default: 
            return state
    }
}