import { FC } from "react";
import classNames from "classnames";
import { useTheme } from "../../Keep/ThemeContex";

export interface SkeletonProps {
  height?: string;
}

export const SkeletonLine: FC<SkeletonProps> = ({ height }) => {
  const theme = useTheme().theme.skeleton;
  return <div className={classNames(theme.line, height)}></div>;
};
