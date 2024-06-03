import { nanoid } from "nanoid";
import photo1 from "../../images/programs/1.jpg";
import photo10 from "../../images/programs/10.jpg";
import photo12 from "../../images/programs/12.jpg";
import photo13 from "../../images/programs/13.jpg";
import photo2 from "../../images/programs/2.jpg";
import photo3 from "../../images/programs/3.jpg";
import photo4 from "../../images/programs/4.jpg";

interface IPhotoArray {
    id: string;
    photo: string;
    type: "Жим лежа" | "Пауэрлифтинг" | "Набор веса" | "Похудение";
    description: string;
    level: "От 0 до МС" | "Без опыта" | "До 2 лет занятий";
    gender: "Мужской" | "Женский";
}

export const photoArray: IPhotoArray[] = [
    {
        id: nanoid(),
        photo: photo1,
        type: "Пауэрлифтинг",
        description: "12 тренировок по пауэрлифтингу",
        level: "От 0 до МС",
        gender: "Мужской",
    },
    {
        id: nanoid(),
        photo: photo2,
        type: "Пауэрлифтинг",
        description: "12 тренировок по пауэрлифтингу",
        level: "От 0 до МС",
        gender: "Женский",
    },
    {
        id: nanoid(),
        photo: photo3,
        type: "Жим лежа",
        description: "12 тренировок по жиму лежа",
        level: "От 0 до МС",
        gender: "Мужской",
    },

    {
        id: nanoid(),
        photo: photo4,
        type: "Жим лежа",
        description: "12 тренировок по жиму лежа",
        level: "От 0 до МС",
        gender: "Женский",
    },

    {
        id: nanoid(),
        photo: photo10,
        type: "Набор веса",
        description: "12 тренировок для набора веса",
        level: "До 2 лет занятий",
        gender: "Мужской",
    },

    {
        id: nanoid(),
        photo: photo12,
        type: "Набор веса",
        description: "12 тренировок для набора веса",
        level: "До 2 лет занятий",
        gender: "Женский",
    },
    {
        id: nanoid(),
        photo: photo13,
        type: "Похудение",
        description: "12 тренировок для похудения",
        level: "До 2 лет занятий",
        gender: "Мужской",
    },
    {
        id: nanoid(),
        photo: photo13,
        type: "Похудение",
        description: "12 тренировок для похудения",
        level: "До 2 лет занятий",
        gender: "Женский",
    },
];
