import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div className={styles.plant_card} key={plant._uid}>
      <Link href={`plants/${plant.slug}`}>
        <a>
          <div className={styles.product_img}>
            <img src={plant.image.filename} alt={plant.name} />
          </div>
        </a>
      </Link>
      <div className={styles.plant_content}>
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
