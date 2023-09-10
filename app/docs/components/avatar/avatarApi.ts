import { ComponentApiProps } from "~/types/types";

export const avatarApiData: ComponentApiProps[] = [
  {
    id: 1,
    propsName: "alt",
    propsType: "string",
    propsDescription: "Alternative text for the avatar image.",
    default: "avatar",
  },
  {
    id: 2,
    propsName: "bordered",
    propsType: "boolean",
    propsDescription: "Determines if the avatar has a border.",
    default: "false",
  },
  {
    id: 3,
    propsName: "img",
    propsType: "string",
    propsDescription: "Path to the user's image to be displayed in the avatar.",
    default: "/avatar.png",
  },
  {
    id: 4,
    propsName: "size",
    propsType: ["xs", "sm", "md", "lg", "xl", "2xl"],
    propsDescription: "Specifies the size of the avatar",
    default: "md",
  },
  {
    id: 5,
    propsName: "shape",
    propsType: ["round", "roundSquare", "square"],
    propsDescription: "Determines the shape of the avatar.",
    default: "md",
  },
  {
    id: 6,
    propsName: "stacked",
    propsType: "boolean",
    propsDescription: "Specifies if avatars should be stacked together.",
    default: "false",
  },
  {
    id: 7,
    propsName: "rounded",
    propsType: "boolean",
    propsDescription: "Determines if the avatar has rounded corners.",
    default: "false",
  },
  {
    id: 8,
    propsName: "status",
    propsType: ["away", "busy", "offline", "online"],
    propsDescription: "Reflects the user's availability status.",
    default: "None",
  },
  {
    id: 9,
    propsName: "statusType",
    propsType: ["dot", "notification"],
    propsDescription:
      "Specifies the type of status. Possible values are: 'dot', 'notification'",
    default: "None",
  },
  {
    id: 10,
    propsName: "statusPosition",
    propsType: ["bottom-left", "bottom-right", "top-left", "top-right"],
    propsDescription: "Specifies the position of the status indicator.",
    default: "bottom-right",
  },
  {
    id: 11,
    propsName: "totalNotification",
    propsType: "number",
    propsDescription: "The total number of notifications to be displayed.",
    default: "99",
  },
];
