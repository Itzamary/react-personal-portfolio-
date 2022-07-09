import React, { useState } from "react";

function Project({currentCategory}){
    console.log(currentCategory.name);

const [photos] = useState([
    {
      name: 'jobSearch',
      category: 'Portfolio'
    },
    {
      name: 'mood Swinger',
      category: 'Portfolio'
    },
    {
      name: 'note Taker',
      category: 'Portfolio'
    },
    {
      name: 'password generator',
      category: 'Portfolio'
    },
    {
      name: 'weather dashboard',
      category: 'Portfolio'
    },
    {
      name: 'work day scheduler',
      category: 'Portfolio'
    },
]);

const currentPhotos = photos.filter((photo) => photo.category === currentCategory.name);
console.log(currentPhotos, 'current photos');

    return(
        <section>
            <h2>
            </h2>
            <div className="flex-row">
            {currentPhotos.map((image, i) => (
                <img
                src={require(`../../assets/${currentCategory.name}/${i}.png`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
                />
            ))}
            </div>
        </section>
    )
}

export default Project;