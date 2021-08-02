import React, { Component } from 'react'

export default class View extends Component {
    render() {
        return (
            <div>
                <ActorDetails></ActorDetails>
                <ActorComponent></ActorComponent>
                <ActorListining></ActorListining>
            </div>
        )
    }
}
