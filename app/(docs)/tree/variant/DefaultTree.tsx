"use client";

import Tree from "@/src/components/Tree";
export const nodes = [
  {
    id: 1,
    title: "Home Page",
    children: [
      {
        id: 2,
        title: "Hero Section",
        children: [
          {
            id: 2.1,
            title: "Hero Image",
            children: [
              {
                id: 2.2,
                title: "Hero Text",
                children: [
                  { id: 2.3, title: "Heading / Tag line" },
                  { id: 2.4, title: "Sub Heading Line" },
                  { id: 2.5, title: "Description Text" },
                ],
              },
            ],
          },
          {
            id: 2.6,
            title: "Contact Page",
            children: [
              {
                id: 2.7,
                title: "Social Media",
                children: [{ id: 2.8, title: "Facebook" }],
              },
            ],
          },
        ],
      },
      {
        id: 4.3,
        title: "Blog Page",
        children: [{ id: 412, title: "Blog Category" }],
      },
    ],
  },
  {
    id: 123,
    title: "Footer Component",
    children: [
      { id: 1231, title: "Footer Logo" },
      { id: 1232, title: "Quick Links" },
    ],
  },
];

const DefaultTree = () => {
  return <Tree nodes={nodes} />;
};

const DefaultTreeCode = `
"use client";
import Tree from "keep-design";
const nodes = [
  {
    id: 1,
    title: "Home Page",
    children: [
      {
        id: 2,
        title: "Hero Section",
        children: [
          {
            id: 2.1,
            title: "Hero Image",
            children: [
              {
                id: 2.2,
                title: "Hero Text",
                children: [
                  { id: 2.3, title: "Heading / Tag line" },
                  { id: 2.4, title: "Sub Heading Line" },
                  { id: 2.5, title: "Description Text" },
                ],
              },
            ],
          },
          {
            id: 2.6,
            title: "Contact Page",
            children: [
              {
                id: 2.7,
                title: "Social Media",
                children: [{ id: 2.8, title: "Facebook" }],
              },
            ],
          },
        ],
      },
      {
        id: 4.3,
        title: "Blog Page",
        children: [{ id: 412, title: "Blog Category" }],
      },
    ],
  },
  {
    id: 123,
    title: "Footer Component",
    children: [
      { id: 1231, title: "Footer Logo" },
      { id: 1232, title: "Quick Links" },
    ],
  },
];

const DefaultTree = () => {
  return <Tree nodes={nodes} />;
};

export default DefaultTree;
`;

export { DefaultTree, DefaultTreeCode };
