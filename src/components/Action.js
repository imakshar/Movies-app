import React, { Component } from 'react'
import Movies from './Movies'

export default class Action extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    
    render() {
        return (
            <div>
                <Movies movies={this.props.movies} handleGenre={this.props.handleGenre} handleLike={this.props.handleLike}/>
            </div>
        )
    }
}
