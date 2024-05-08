import { Container } from "../container/Container";
import { photoArray } from "./photoArray";

import styles from "./Programs.module.scss";

export interface ProgramsProps {}

export const Programs = ({}: ProgramsProps) => {
    return (
        <div className={styles.programs}>
            <Container>
                <div className={styles.programs__items}>
                    {photoArray.map((ph) => (
                        <img
                            key={ph}
                            className={`${styles["programs__items-item"]}`}
                            src={ph}
                            alt={`${ph}`}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};
