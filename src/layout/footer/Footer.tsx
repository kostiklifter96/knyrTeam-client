import { Container } from "../../components/container/Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__flex}>
                    <div className={styles["footer__flex-list"]}>
                        <h2>Контакты</h2>
                        <ul className={styles["footer__flex-list-social"]}>
                            <li
                                className={
                                    styles["footer__flex-list-social-item"]
                                }
                            >
                                Telegram:{" "}
                                <a
                                    href='https://t.me/Knyrlifting'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    @Knyrlifting
                                </a>{" "}
                            </li>
                            <li
                                className={
                                    styles["footer__flex-list-social-item"]
                                }
                            >
                                Instagram:{" "}
                                <a
                                    href='https://www.instagram.com/tovarishch_trener/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    tovarishch_trener
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                    <div className={styles["footer__flex-list-author"]}>
                        <h2>КнырTeam</h2>
                        <div>Все права защищены ©КнырTeam</div>
                        <div>
                            Любое копирование материалов только с разрешения
                            автора
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
