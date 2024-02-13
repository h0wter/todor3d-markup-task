import { ReactNode } from "react";
import { IconCard } from "../../icon-card/icon-card.tsx";
import GoalIcon from "../../../assets/images/icons/goal.svg?react";
import GoalCancelledIcon from "../../../assets/images/icons/goal-cancelled.svg?react";
import SubstitutionIcon from "../../../assets/images/icons/substitution.svg?react";
import { IconName } from "../../../enums";
import { type ValueOf } from "../../../types";

const iconNameToSvg: Record<ValueOf<typeof IconName>, ReactNode> = {
  [IconName.GOAL]: <GoalIcon />,
  [IconName.GOAL_CANCELLED]: <GoalCancelledIcon />,
  [IconName.SUBSTITUTION]: <SubstitutionIcon />,
  [IconName.RED_CARD]: <IconCard iconColor="red" />,
  [IconName.YELLOW_CARD]: <IconCard iconColor="yellow" />,
};

export { iconNameToSvg };
