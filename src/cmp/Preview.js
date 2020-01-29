import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Preview extends Component {
    render() {
        return (
            <Link to={`/ContactPage/${this.props.contact._id}`}>  <div className="container-preview">
                <img src={`https://robohash.org/${this.props.contact.name}.png`} width="131" height="129" />

                <li>
                    <h2>{this.props.contact.name}</h2>



                </li>
            </div></Link>
        )
    }
}
