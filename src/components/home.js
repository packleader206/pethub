import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>nick nack paddy whack</p>
                <img style={imageStyle} src="dogbone.png" />
            </div>
        )

    }
}

export default Home
