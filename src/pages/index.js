import Head from "next/head";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story, {
    resolve_relations: ["featured_plants.plants"],
  });

  return (
    <>
      <Head>
        <title>Plants World | Home</title>
      </Head>
      <div className="container">
        <StoryblokComponent blok={story.content} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: `${process.env.NEXT_PUBLIC_STORYBLOK_APP_MODE}`, // draft or 'published'
    resolve_relations: ["featured_plants.plants"],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
