export default {
  name: "dishes",
  title: "Dishes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "popular",
      title: "Most Popular",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "popular" }],
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Price",
      name: "price",
      by: [{ field: "price", direction: "desc" }],
    },
  ],
};
