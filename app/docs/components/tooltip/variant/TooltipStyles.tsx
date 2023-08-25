"use client";
import { Button } from "@/src/components/Button";
import { Tooltip } from "@/src/components/Tooltip";

const TooltipStyles = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="light"
      >
        <Button size="sm" type="primary">
          Light Tooltip
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="right"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Dark Tooltip
        </Button>
      </Tooltip>
    </div>
  );
};

const TooltipStylesCode = `
"use client";
import { Tooltip,Button } from "keep-design";

const TooltipStyles = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="light"
      >
        <Button size="sm" type="primary">
          Light Tooltip
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="right"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Dark Tooltip
        </Button>
      </Tooltip>
    </div>
  );
};

export default TooltipStyles;

`;

export { TooltipStyles, TooltipStylesCode };