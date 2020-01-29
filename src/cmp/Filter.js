import React, { Component } from 'react'
import { Input, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class Filter extends Component {
    render() {
        const style = {
            marginRight: '10px',
            marginLeft: '10px'

        }
        return (
            <div>
                <Input icon='search' name="name" value={this.props.name}
                    placeholder="Name" onChange={(ev) => { this.props.onChange(ev.target.name, ev.target.value) }} ></Input>
                <Input style={style} icon='search' name="email" value={this.props.email}
                    placeholder="Email" onChange={(ev) => { this.props.onChange(ev.target.name, ev.target.value) }}></Input>
                <Input icon='search' name="phone" value={this.props.phone}
                    placeholder="Phone" onChange={(ev) => { this.props.onChange(ev.target.name, ev.target.value) }}></Input>
            </div>
        )
    }
}
