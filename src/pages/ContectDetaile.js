import React, { Component } from 'react'

import ContactService from '../service/ContactService.js'

export default class ContectDetaile extends Component {

    state = {
        contact: {}
    }


    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {

        try {
            const contact = await ContactService.getContactById(this.props.match.params.id)
            this.setState({ contact })

        } catch (err) {
            console.log(err)
        }
    }





    render() {
        return (
            <div className="container-ContectDetaile">
                <img src={`https://robohash.org/${this.state.contact.name}.png`} width="200" height="200" />
                <h2>name: {this.state.contact.name}</h2>
                <h2>id: {this.state.contact._id}</h2>
                <h2>email: {this.state.contact.email}</h2>
                <h2>phone: {this.state.contact.phone}</h2>

            </div>
        )
    }
}
