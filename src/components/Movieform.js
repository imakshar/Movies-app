import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export default class Movieform extends Component {
    render() {
        return (
            <div>
                <h1>This is {this.props.match.params.id} </h1>
                <Button variant="contained" color="Secondary"  onClick={()=>this.props.history.push("/movies")}>Save</Button>
            </div>
        )
    }
}
