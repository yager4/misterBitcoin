import React, { Component } from 'react'

import ContactService from '../service/ContactService.js'


export default class EditPage extends Component {

    state = {
        content: {}
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
            <div>




            </div>
        )
    }
}
