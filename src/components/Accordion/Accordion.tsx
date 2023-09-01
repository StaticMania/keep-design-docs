import classNames from "classnames";
import type {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import { Children, cloneElement, useMemo, useState } from "react";
import type { keepAccordionComponentTheme } from "./AccordionContent";
import { AccordionContent } from "./AccordionContent";
import type { AccordionPanelProps } from "./AccordionPanel";
import { AccordionPanel } from "./AccordionPanel";
import type { keepAccordionTitleTheme } from "./AccordionTitle";
import { AccordionTitle } from "./AccordionTitle";
import { DeepPartial } from "@/src/helpers/deep-partial";
import { KeepBoolean } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";
import { mergeDeep } from "@/src/helpers/mergeDeep";

export interface keepAccordionTheme {
  root: keepAccordionRootTheme;
  content: keepAccordionComponentTheme;
  title: keepAccordionTitleTheme;
}

export interface keepAccordionRootTheme {
  base: string;
  flush: KeepBoolean;
}

export interface AccordionProps
  extends PropsWithChildren<ComponentProps<"div">> {
  alwaysOpen?: boolean;
  showIcon?: boolean;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  children:
    | ReactElement<AccordionPanelProps>
    | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
  collapseAll?: boolean;
  theme?: DeepPartial<keepAccordionTheme>;
  iconPosition?: string;
  disabled?: boolean;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  showIcon = true,
  openIcon,
  closeIcon,
  children,
  flush = false,
  collapseAll = false,
  className,
  iconPosition = "right",
  disabled = false,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0);

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          showIcon,
          flush,
          closeIcon,
          openIcon,
          disabled,
          iconPosition,
          isOpen: isOpen === i,
          setOpen: () => setOpen(isOpen === i ? -1 : i),
        })
      ),
    [
      alwaysOpen,
      showIcon,
      children,
      flush,
      isOpen,
      iconPosition,
      disabled,
      closeIcon,
      openIcon,
    ]
  );
  const oldTheme = useTheme().theme.accordion.root;
  const theme = mergeDeep(oldTheme, customTheme);

  return (
    <div
      className={classNames(
        theme.base,
        theme.flush[flush ? "on" : "off"],
        className
      )}
      data-testid="keep-accordion"
      {...props}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
