import classNames from "classnames";
import React from "react";
import styles from "./button.module.scss";
import { TButtonProps } from "./types";

const Button = ({ className, children, disabled, large }: TButtonProps) => {
  return (
    <button
      className={classNames(className, styles.root, {
        [styles.largeBtn]: large,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
