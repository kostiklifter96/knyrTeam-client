import React from "react";
import styles from "./Container.module.scss";

interface IProps {
    children: React.ReactElement[] | React.ReactElement;
}

export const Container = ({ children }: IProps) => {
    return <div className={styles.container}>{children}</div>;
};
