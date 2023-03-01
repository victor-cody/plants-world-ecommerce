import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <h2 className={styles.title} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
