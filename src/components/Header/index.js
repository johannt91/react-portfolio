import React from 'react'
import Navigation from '../Nav'

function Header(props) {
    const { currentPage, setCurrentPage } = props;
    return (
        <header>
                <h2>
                    Johann Taylor
                </h2>
                <Navigation
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                >
                </Navigation>
        </header>
    )
}

export default Header;
