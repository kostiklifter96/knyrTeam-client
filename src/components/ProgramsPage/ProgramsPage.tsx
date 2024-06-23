import { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { photoArray } from "../../data/photoArray";
import { SVGFile } from "../../images/svg/SVGFile";
import { Container } from "../container/Container";
import styles from "./ProgramsPage.module.scss";

export const ProgramsPage = () => {
    const params = useParams();
    const photo = photoArray.find((el) => el.id === params.id);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.programsPage}>
            <Container>
                <div className={styles.programsPage__info}>
                    <div className={styles["programsPage__info-image"]}>
                        <div
                            className={styles["programsPage__info-image--item"]}
                            style={{
                                backgroundImage: `url(${photo?.photo})`,
                            }}
                        ></div>
                    </div>
                    <div className={styles["programsPage__info-description"]}>
                        <ul
                            className={
                                styles[
                                    "programsPage__info-description--genderAndLevel"
                                ]
                            }
                        >
                            <li>Тип: {photo?.type}</li>
                            <li>Пол: {photo?.gender}</li>
                            <li>Уровень: {photo?.level}</li>
                        </ul>

                        <h2>Кому подходит?</h2>

                        <div
                            className={
                                styles[
                                    "programsPage__info-description--interpretation"
                                ]
                            }
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ratione debitis, id veniam expedita eum
                            perferendis est magni, dolore mollitia, quae quas
                            repudiandae minus. Blanditiis animi saepe quasi
                            expedita, tempora quas? Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Ratione debitis, id
                            veniam expedita eum perferendis est magni, dolore
                            mollitia, quae quas repudiandae minus. Blanditiis
                            animi saepe quasi expedita, tempora quas?
                        </div>

                        <div
                            className={
                                styles[
                                    "programsPage__info-description--videoDescription"
                                ]
                            }
                        >
                            <iframe
                                src='https://www.youtube.com/embed/Wp-HUAaqdIU?si=v21aXGNF7WdMJU2C'
                                title='YouTube video player'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                referrerPolicy='strict-origin-when-cross-origin'
                                allowFullScreen
                            ></iframe>
                        </div>

                        <h2>Выберите свою тренировочную программу:</h2>
                        <ul
                            className={
                                styles[
                                    "programsPage__info-description--excelList"
                                ]
                            }
                        >
                            <li>
                                <SVGFile
                                    className={
                                        styles[
                                            "programsPage__info-description--excelList--svgSize"
                                        ]
                                    }
                                />
                                <p>От 0 до 1 взрослого</p>
                            </li>
                            <li>
                                <SVGFile
                                    className={
                                        styles[
                                            "programsPage__info-description--excelList--svgSize"
                                        ]
                                    }
                                />
                                <p> От 1 взрослого до КМС </p>
                            </li>
                            <li>
                                <SVGFile
                                    className={
                                        styles[
                                            "programsPage__info-description--excelList--svgSize"
                                        ]
                                    }
                                />
                                <p>От КМС до МС</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};
