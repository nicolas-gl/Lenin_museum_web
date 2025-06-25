import { useState } from 'react';
import styles from './Filter.module.scss'

type Props = {}
const params = {
    "Материал": ["Мрамор", "Бронза", "Гранит", "Керамика", "Фарфор", "Гипс", "Металл", "Разное"],
    "Автор": ["Сычев", "Аронсон", "Лехт", "Андреев"],
    "Период": ["1920е", "1930е", "1940е", "1950е", "1960е", "1970е", "1980е", "1990е", "после 2000"],
    "Размер": ["менее 10 см", "10-20 см", "20-30 см", "30-40 см", "более 40 см"],
}

const paramsKeys = Object.keys(params);
// const active = paramsKeys[0];

const Filter = (props: Props) => {

    const [active, setActive] = useState<string>();

    return (
        <div className={styles.filter}>
            {
                Object.entries(params).map(([key, value]) =>
                    <div key={key}>
                        <button className={active === key ? styles.active : ""} onClick={() => setActive(active === key ? "" : key)}>{key}</button>
                        <ul className={active === key ? "" : styles.hidden}>
                            {value.map((item) => <li onClick={() => alert("Фильтр будет доступен после добавления предметов")}>{item}</li>)}
                            {/* <li className={styles.selected}>sdf</li> */}
                        </ul>
                    </div>)
            }
        </div>
    )
}
export default Filter