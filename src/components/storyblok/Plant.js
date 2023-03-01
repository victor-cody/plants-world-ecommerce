import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Plant = ({ blok }) => {
  const resizedImage = function (imageUrl) {
    if (typeof imageUrl !== "undefined") {
      return imageUrl.filename.replace(
        "//a.storyblok.com",
        "//img2.storyblok.com/300x250"
      );
    }
    return null;
  };

  return (
    <div
      className={styles.single_container}
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className={styles.left_section}>
        <Image src={blok.image.filename} className={styles.left_img} alt="" />
      </div>
      <div className={styles.right_section}>
        <h3 className={styles.title}>{blok.name}</h3>
        <p className={styles.price}>${blok.price}</p>
        <div
          className={styles.para}
          dangerouslySetInnerHTML={{
            __html: blok.description,
          }}
        ></div>
        <button
          className="btn snipcart-add-item"
          data-item-id={blok.id}
          data-item-price={blok.price}
          data-item-url={`bloks/${blok.slug}`}
          data-item-image={blok.image.url}
          data-item-name={blok.name}
        >
          Add to cart 🛒
        </button>
      </div>
    </div>
  );
};

export default Plant;
