export default {
  name: "deals",
  title: "Deals",
  type: "document",
  fields: [
    {
      name: "deal",
      title: "Name of deal",
      type: "string",
    },
    {
      name: "description",
      title: "Short description",
      type: "string",
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
  ],
};
