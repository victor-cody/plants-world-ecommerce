import { storyblokEditable } from "@storyblok/react";
// import Image from "next/image";

const Plant = ({ blok }) => {
  const resizedImage = function (imageUrl) {
    if (typeof imageUrl !== "undefined") {
      return imageUrl.filename.replace(
        "//a.storyblok.com",
        "//img2.storyblok.com/400x650"
      );
    }
    return null;
  };

  return (
    <main
      className="single__container"
      {...storyblokEditable(blok)}
      key={blok._uid}
    >
      <div className="left__section">
        <img src={resizedImage(blok.image)} className="left_img" alt="" />
      </div>
      <div className="right__section}">
        <h3 className="title">{blok.name}</h3>
        <p className="price">${blok.price}</p>
        <div
          className="para"
          dangerouslySetInnerHTML={{
            __html: blok.description,
          }}
        ></div>
        <button
          className="btn snipcart-add-item"
          data-item-id={blok._uid}
          data-item-price={blok.price}
          data-item-url={`bloks/${blok.slug}`}
          data-item-image={blok.image.filename}
          data-item-name={blok.name}
        >
          Add to cart 🛒
        </button>
      </div>
    </main>
  );
};

export default Plant;
