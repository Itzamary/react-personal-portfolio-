import React from "react";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props
    console.log(props);
    console.log(categories);
    const { name } = currentCategory;
    console.log(name)

    function categorySelected(name) {
        console.log(`${name} clicked`)
    };

    return (
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span 
                              onClick={() => { 
                                setCurrentCategory(category);
                                categorySelected(category.name);
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