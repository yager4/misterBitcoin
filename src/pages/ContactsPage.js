import React, { Component } from 'react'

import ContactService from '../service/ContactService.js'
import List from '../cmp/List.js'


export default class ContactPage extends Component {




    state = {

        contacts: [],
        filterBy: {
            name: '',
            email: '',
            phone: ''

        }
    }

    componentDidMount() {
        this.loadContexts();



    }

    loadContexts = async () => {

        try {
            const contacts = await ContactService.getContacts()
            this.setState({ contacts })

        } catch (err) {
            console.log(err)
        }
    }

    render() {
        console.log(this.state.contacts)
        if (!this.state.contacts.length) return <h1> loading.... </h1>
        return (
            <div>
                <List contacts={this.state.contacts}></List>
            </div>
        )
    }
}
