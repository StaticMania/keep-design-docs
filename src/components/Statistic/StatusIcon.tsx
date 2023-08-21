import classNames from "classnames";
import { FC, ReactNode } from "react";
import { useStatisticContext } from "./StatisticContext";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepIconTheme {
  base: string;
  selected: {
    on: string;
    off: string;
  };
}

interface StatusIconProps {
  icon: ReactNode;
}

const StatusIcon: FC<StatusIconProps> = ({ icon }) => {
  const { iconBg } = useStatisticContext();

  const theme = useTheme().theme.statistic;
  return (
    <div
      className={classNames(
        theme.icon.base,

        iconBg === "success" ? theme.icon.selected.on : theme.icon.selected.off
      )}
    >
      {icon}
    </div>
  );
};

export default StatusIcon;