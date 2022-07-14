import React from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props
    console.log(props);
    console.log(categories);
    const { name } = currentCategory;
    console.log(name)


    return (
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span 
                              onClick={() => { 
                                setCurrentCategory(category);
                                setContactSelected();
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