import { useState } from "react";
import { Container } from "../container/Container";
import { photoArray } from "./photoArray";

import styles from "./Programs.module.scss";

export interface ProgramsProps {}

export const Programs = ({}: ProgramsProps) => {
    const [isHovered, setIsHovered] = useState<null | number>(null);
    return (
        <div className={styles.programs}>
            <Container>
                <div className={styles.programs__text}>
                    <h1> Программы тренировок для любого уровня и пола</h1>
                </div>

                <div className={styles.programs__items}>
                    {photoArray.map((ph, i) => (
                        <div
                            key={ph.id}
                            className={`${styles["programs__items-item"]}`}
                            style={{ backgroundImage: `url(${ph.photo})` }}
                            tabIndex={1}
                            onMouseEnter={() => setIsHovered(i)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            {isHovered === i && (
                                <div className={styles.programs__description}>
                                    <div
                                        className={
                                            styles["programs__description-item"]
                                        }
                                    >
                                        {ph.description}
                                    </div>
                                    <div
                                        className={
                                            styles["programs__description-item"]
                                        }
                                    >
                                        Уровень: {ph.level}
                                    </div>
                                    <div
                                        className={
                                            styles["programs__description-item"]
                                        }
                                    >
                                        Пол: {ph.gender}
                                    </div>

                                    {isHovered === i && (
                                        <div className={styles.programs__btn}>
                                            <button>Узнать подробнее</button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};
