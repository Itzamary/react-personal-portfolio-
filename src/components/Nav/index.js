import React from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props

    const { name } = currentCategory;
  


    return (
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                        <li className={`mx-1 ${name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span 
                              onClick={() => { 
                                setCurrentCategory(category);
                                setContactSelected(false);
                               }}
                            >
                                {category.name}
                            </span>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Nav;