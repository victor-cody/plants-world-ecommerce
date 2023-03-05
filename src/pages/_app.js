import "@/styles/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import {
  Teaser,
  HomePage,
  Plant,
  FeaturedPlants,
  Layout,
} from "../components/";

const components = {
  teaser: Teaser,
  page: HomePage,
  plant: Plant,
  featured_plants: FeaturedPlants,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
