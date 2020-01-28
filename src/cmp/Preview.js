import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export default class Preview extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <li>
                    <Link to={`/ContactPage/${this.props.contact._id}`}><h2>{this.props.contact.name}</h2></Link>
           


                </li>
            </div>
        )
    }
}
