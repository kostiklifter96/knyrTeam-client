import { useEffect, useState } from "react";
import promoBench from "../../images/promo/promo-bench.jpg";
import promoDeadlift from "../../images/promo/promo-deadlift.jpg";
import promoSquat from "../../images/promo/promo-squat.jpg";

import styles from "./Promo.module.scss";

export interface PromoProps {}

const imagesList = [promoSquat, promoBench, promoDeadlift];

export const Promo = ({}: PromoProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1,
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.promo}>
                <div>
                    <div className={styles["promo-wrapper"]}></div>
                    <div
                        className={styles["promo-images"]}
                        style={{
                            backgroundImage: `url(${imagesList[currentImageIndex]})`,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};
