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
      name: "category",
      title: "Category",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "categories" },
        },
      ],
    },
  ],
};
