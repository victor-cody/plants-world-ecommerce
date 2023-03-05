import Head from "next/head";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{`Plants World | ${story.name}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug;

  let sbParams = {
    version: `${process.env.NEXT_PUBLIC_STORYBLOK_APP_MODE}`, // "draft" or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/plants/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: `${process.env.NEXT_PUBLIC_STORYBLOK_APP_MODE}`,
  });

  let plant_paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    plant_paths.push({ params: { slug: splittedSlug[1] } });
  });

  return {
    paths: plant_paths,
    fallback: false,
  };
}
