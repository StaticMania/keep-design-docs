"use client";
import { Button } from "@/src/components/Button";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

const ButtonGroupWithOnlyIcon = () => {
  return (
    <Button.Group>
      <Button type="outlineGray">
        <Cube size={24} />
      </Button>
      <Button type="outlineGray">
        <Gear size={24} />
      </Button>
      <Button type="outlineGray">
        <ChatCircleDots size={24} />
      </Button>
    </Button.Group>
  );
};

const ButtonGroupWithIconCode = `"use client";
import { Button } from "keep-design";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

const ButtonGroupWithOnlyIcon = () => {
  return (
    <Button.Group>
      <Button type="outlineGray">
        <Cube size={24} />
      </Button>
      <Button type="outlineGray">
        <Gear size={24} />
      </Button>
      <Button type="outlineGray">
        <ChatCircleDots size={24} />
      </Button>
    </Button.Group>
  );
};
`;

export { ButtonGroupWithOnlyIcon, ButtonGroupWithIconCode };