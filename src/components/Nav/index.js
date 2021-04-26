import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'


function Nav(props) {
    const pages = ['About', 'Portfolio', 'Contact', 'Resume']

    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collpase navbar-collapse" id="navbarNavAltMarkup">
                <ul className="nav-menu navbar-nav">
                    {pages.map((page) =>(
                        <li className="mx-1" key={page.name}>
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
            </div>

        </nav>

    )
}

export default Nav;