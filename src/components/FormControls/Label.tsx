import classNames from "classnames";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { excludeClassName } from "../../helpers/exclude";
import type { KeepStateColors } from "@/src/Keep/KeepTheme";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepLavelTheme {
  base: string;
  colors: LabelColors;
  disabled: string;
}

export interface LabelColors extends KeepStateColors {
  [key: string]: string;
  default: string;
}

export interface LabelProps
  extends PropsWithChildren<
    Omit<ComponentProps<"label">, "className" | "color">
  > {
  color?: keyof LabelColors;
  value?: string;
  disabled?: boolean;
}

export const Label: FC<LabelProps> = ({
  children,
  color = "default",
  disabled = false,
  value,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.formControls.label;
  const theirProps = excludeClassName(props);
  return (
    <label
      className={classNames(
        theme.base,
        theme.colors[color],
        disabled && theme.disabled
      )}
      {...theirProps}
    >
      {value ?? children ?? ""}
    </label>
  );
};