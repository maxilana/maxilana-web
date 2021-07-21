import React, { FC, ReactElement } from "react";

import styles from './Stack.module.css';

interface Props {
  children: ReactElement[];
  spacing?: "sm" | "md" | "lg";
};

const spacingClasses = {
  sm: styles.hSpaceSmall,
  md: styles.hSpace,
  lg: styles.hSpaceLarge,
}

const HStack: FC<Props> = ({ children, spacing = "md" }) => {
  const spacingStyle = spacingClasses[spacing];

  return (
    <div className={`${styles.root} ${styles.horizontal}`}>
      {React.Children.map(children, (child) => (
        <div className={spacingStyle}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default HStack;
