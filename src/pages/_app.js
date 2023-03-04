import "@/styles/globals.css";
import "@styles/Home.module.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { Teaser, Page, Plant, FeaturedPlants } from "../components/";

const components = {
  teaser: Teaser,
  page: Page,
  plant: Plant,
  featured_plants: FeaturedPlants,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
