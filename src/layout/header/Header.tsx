import { useNavigate } from "react-router";
import { Container } from "../../components/container/Container";
import styles from "./Header.module.scss";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles["header-container"]}>
                    <div
                        className={styles["header-logo"]}
                        onClick={() => navigate(`/`)}
                    >
                        КнырTeam
                    </div>
                    <ul className={styles["header-list"]}>
                        <li className={styles["header-list__info"]}>Обо мне</li>
                        <li
                            className={styles["header-list__info"]}
                            onClick={() => navigate(`/`)}
                        >
                            <a href='#programs'>Программы</a>
                        </li>
                        <li className={styles["header-list__info"]}>
                            Контакты
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
};
