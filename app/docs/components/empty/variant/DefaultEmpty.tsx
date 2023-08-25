"use client";
import { Empty } from "@/src/components/Empty";

const DefaultEmpty = () => {
  return (
    <Empty
      title="Oops! You seem to be lost"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
    />
  );
};

const DefaultEmptyCode = `
"use client";
import { Empty } from "keep-design";

const DefaultEmpty = () => {
  return (
    <Empty
      title="Oops! You seem to be lost"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
    />
  );
};

export default DefaultEmpty;
`;

export { DefaultEmpty, DefaultEmptyCode };