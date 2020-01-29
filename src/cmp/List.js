import React from 'react'

import Preview from './Preview.js'

function List(props) {

    return props.contacts.map((contact, i) => <Preview key={i} contact={contact}></Preview>)




}

export default List
