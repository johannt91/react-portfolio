import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'


function Nav(props) {
    const pages = ['About', 'Portfolio', 'Resume']

    return (
        <nav>
            <ul className="nav-menu">
                {pages.map((page, index) =>(
                    <li className="mx-1" key={index}>
                        <a 
                        href={'#' + page.toLocaleLowerCase()} 
                        onClick={() => props.setCurrentPage(page)}
                        className={
                            props.currentPage === page ? 'nav-item nav-link navActive' : 'nav-item nav-link'
                        }
                        >
                        {capitalizeFirstLetter(page)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Nav;