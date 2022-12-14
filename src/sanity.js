import SanityClient from "@sanity/client";

const client = SanityClient({
  projectId: "2qeydq79",
  dataset: "production",
  apiVersion: "2022-09-05", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
