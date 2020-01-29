import React, { Component } from 'react'

import ContactService from '../service/ContactService.js'
import List from '../cmp/List.js'
import Filter from '../cmp/Filter.js'


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

    loadContexts = async (filterBy) => {
        const term = {}

        try {
            const contacts = await ContactService.getContacts({ term: filterBy })
            this.setState({ contacts })

        } catch (err) {
            console.log(err)
        }
    }
    onChange = (name, value) => {
        // this.setState(prevState => ({createBy: { ...prevState.createBy, [field]: value }}))
        this.setState(prvState => ({ filterBy: { ...prvState.filterBy, [name]: value } }), () => this.loadContexts(this.state.filterBy))

    }

    render() {

        if (!this.state.contacts.length)
            return <h1 className="loading"> loading.... </h1>
        return (
            <React.Fragment>
                <div className="container-input">
                    <Filter onChange={this.onChange} ></Filter>
                </div >
                {(this.state.contacts === 'not found') ? <div className="not-found"> <h1> not found </h1> </div> :
                    <div className="container-contextsPage">


                        <List contacts={this.state.contacts}></List>
                    </div>}
            </React.Fragment>
        )
    }
}
