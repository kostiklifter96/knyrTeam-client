import { Container } from "../../components/container/Container";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles["header-container"]}>
                    <div className={styles["header-logo"]}>КнырTeam</div>
                    <ul className={styles["header-list"]}>
                        <li className={styles["header-list__button"]}>
                            Обо мне
                        </li>
                        <li className={styles["header-list__button"]}>
                            Программы
                        </li>
                        <li className={styles["header-list__button"]}>
                            Контакты
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};
