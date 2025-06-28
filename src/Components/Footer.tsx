import { Link } from 'react-router';
import { useLocation } from 'react-router';
import styles from './Footer.module.scss';


const links = {
    "КОЛЛЕКЦИЯ": "/",
    "БИОГРАФИЯ": "/biography",
    "О МУЗЕЕ": "/about",
    "КОНТАКТЫ": "/contacts"
}

const Footer = () => {

    let location = useLocation();

    return (
        <footer >
            <div className={styles.navigation}>
                {Object.entries(links).map(([key, value]) =>
                    <Link to={value}>
                        <h2 className={location.pathname === value ? styles.active : ""}>{key}</h2>
                    </Link>
                )}
            </div>

            {/* <Link to="/info"><img src={"assets/img/icons/info.svg"} alt="info" /></Link> */}

            {/* {isLogined
                ? <Link to="/main"><img src={"assets/img/icons/home.svg"} alt="home" /></Link>
                : <Link to="/info"><img src={"assets/img/icons/info.svg"} alt="info" /></Link>
            } */}

        </footer >
    )
}

export default Footer;


