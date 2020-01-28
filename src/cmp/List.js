import React from 'react'

import Preview from './Preview.js'

function List(props) {
    console.log(props)

    return <ul>{props.contacts.map((contact, i) => <Preview key={i} contact={contact}></Preview>)}</ul>




}

export default List
