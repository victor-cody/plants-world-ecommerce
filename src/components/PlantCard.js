import Link from "next/link";
import React from "react";

const PlantCard = ({ plant }) => {
  const resizedImage = function (imageUrl) {
    if (typeof imageUrl !== "undefined") {
      return imageUrl?.filename?.replace(
        "//a.storyblok.com",
        "//img2.storyblok.com/300x250"
      );
    }
    return null;
  };

  return (
    <div className="plant__card" key={plant._uid}>
      <Link href={`/plants/${plant.slug}`}>
        <div className="product__img">
          <img src={resizedImage(plant.image)} alt={plant.name} />
        </div>
      </Link>
      <div className="plant__content">
        <h3>{plant.name}</h3>
        <p>${plant.price}</p>
        <button
          className="btn snipcart-add-item"
          data-item-id={plant._uid}
          data-item-price={plant.price}
          data-item-url={`plants/${plant.slug}`}
          data-item-image={plant.image.filename}
          data-item-name={plant.name}
        >
          Add to cart 🛒
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
