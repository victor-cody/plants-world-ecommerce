import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import PlantCard from "../PlantCard";

const FeaturedPlants = ({ blok }) => {
  return (
    <div className={styles.products_container} {...storyblokEditable(blok)}>
      {blok.plants.map((plant) => {
        plant.content.slug = plant.slug;
       return <PlantCard plant={plant.content} key={plant.uuid} />;
})}
    </div>
  );
};

export default FeaturedPlants;
