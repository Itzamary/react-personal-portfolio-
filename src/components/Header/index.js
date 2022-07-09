import React from 'react';
import Nav from '../Nav'


function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props
    console.log(categories, 'header categories')

    return (
        <header className="flex-row px-1">
            <h1>Itzamary Jimenez</h1>
            <Nav 
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
        </header>
    )
}

export default Header;