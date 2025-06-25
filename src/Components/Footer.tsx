import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer >
            <div className={styles.navigation}>
                <h2>КОЛЛЕКЦИЯ</h2>
                <h2>БИОГРАФИЯ</h2>
                <h2>О МУЗЕЕ</h2>
                <h2>КОНТАКТЫ</h2>
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


