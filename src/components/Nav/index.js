import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'


function Nav(props) {
    const pages = ['About', 'Portfolio', 'Contact']

    return (
        <header>
            <h2>
                Johann Taylor
            </h2>
            <nav>
                <ul className="nav-menu">
                    {pages.map((page) =>(
                        <li className="mx-1" key={page.name}>
                            <a 
                            href={'#' + page.toLocaleLowerCase()} 
                            onClick={() => props.setCurrentPage(page)}
                            >
                            {capitalizeFirstLetter(page)}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;