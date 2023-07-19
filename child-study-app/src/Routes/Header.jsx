import React from 'react'
import { Link } from 'react-router-dom'
import Head from "../components/common/header/Head.component"
import "./Header.styles.css"



const navLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "All Courses",
        url: "/courses"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Team",
        url: "/team"
    },
    {
        name: "Pricing",
        url: "/pricing"
    },
    {
        name: "Journal",
        url: "/journal"
    },
    {
        name: "Contact",
        url: "/contact"
    }
]

const Header = () => {
    const [click, setClick] = React.useState( false )
    return (
        <>
            <Head />
            <header>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick( false )}>
                        {
                            navLinks.map( ( link, index ) => {
                                return (
                                    <li key={index}>
                                        <Link to={link.url}>{link.name}</Link>
                                    </li>
                                )
                            } )
                        }

                    </ul>
                    <div className="start">
                        <div className="button">GET CERTIFICATE</div>
                    </div>

                    <button className='toggle' onClick={() => setClick( !click )}>
                        {click ? <i className='fa fa-times'></i> : <i className='fa fa-times'></i>}
                    </button>
                </nav>
            </header >

        </>
    )
}

export default Header
