import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import PlantCard from "../PlantCard";

const FeaturedPlants = ({ blok }) => {
  return (
    <div className="plants__container" {...storyblokEditable(blok)}>
      {blok.plants.map((plant) => {
        plant.content.slug = plant.slug;
        return <PlantCard plant={plant.content} key={plant.uuid} />;
      })}
    </div>
  );
};

export default FeaturedPlants;
