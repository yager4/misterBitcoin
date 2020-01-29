
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import { Icon } from 'semantic-ui-react'
import  '../style/css/all.min.css'



export default function Navbar(props) {
    return <div className="main-navbar" style={props.styleNavBar}>
        <Link to="/" > 

            {/* <img src="https://i.ibb.co/8BxPMdT/logo.png" alt="logo"></img> */}
            <div className="logo"> <i className="fab fa-bitcoin"></i> 
            </div>

      </Link>
        <div>

        </div>
        <div className=" nav-links">
            <div className="nav-link"><NavLink activeClassName="active" to='/' exact>Home page</NavLink></div>
            <div className="nav-link"><NavLink activeClassName="active" to='/ContactsPage' exact>Contacts page</NavLink></div>
        </div>
    </div>

}

{/* <Icon size={'large'} disabled style={icon} name='like' /> */ }
