import { rest } from "msw";

const wines = [
  {
    id: 1,
    name: "Jacobs Creek",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_1.jpg",
  },
  {
    id: 2,
    name: "Sauvignon Blanc",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_2.jpg",
  },
  {
    id: 3,
    name: "Nobilo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_3.jpg",
  },
  {
    id: 4,
    name: "Bollinger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_4.jpg",
  },
  {
    id: 5,
    name: "Moet & Chandon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_5.jpg",
  },
  {
    id: 6,
    name: "Wente",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_6.jpg",
  },
  {
    id: 7,
    name: "Imperial Creme",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_7.jpg",
  },
  {
    id: 8,
    name: "Bevenido",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_8.jpg",
  },
  {
    id: 9,
    name: "Albali",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_9.jpg",
  },
  {
    id: 10,
    name: "Glenfiddich",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/public/images/wine_10.jpg",
  },
  {
    id: 11,
    name: "Krumbach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_11.jpg",
  },
  {
    id: 12,
    name: "Six de Salon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_12.jpg",
  },
];

// I created a mock server, which would act as a regular rest api, which returns the data needed to be used to populate the screen
export const handlers = [
  rest.get("/wines", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json(
        Object.entries(wines).map(([status, data]) => {
          return { status, ...data };
        })
      )
    );
  }),
];
