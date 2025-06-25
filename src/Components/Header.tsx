// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../Redux/hooks';
// import { login, logout } from '../Redux/Slices/authSlice';
import styles from './Header.module.scss';
// import stylesStatus from './Status.module.scss';
// import { stringToHash, getCookie } from '../lib/other';
// import { toast } from 'react-toastify';
// import { loginToast, errorToast } from './Toasts';
// import { useOutletContext } from 'react-router';
// import { ItemType, OfferInfoType } from '../App';


// type Context = {
//     items: ItemType[],
//     offerInfo: OfferInfoType,
//     getItemsFromSearch: (event: string) => void,
//     saveNewOffer: () => void,
//     clearItems: () => void,
//     updateOffer: () => void,
// };


const Header: React.FC = () => {

    // const { getItemsFromSearch, saveNewOffer, clearItems, updateOffer, items, offerInfo } = useOutletContext<Context>();

    // const areItemsAdded = !!items.length
    // const isOfferCreated = !!offerInfo.offerId

    // const isLogined = useAppSelector((state) => state.authorization.value);
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     switchFullStyle(!isLogined || areItemsAdded || window.innerWidth <= 700);
    // }, [isLogined, areItemsAdded]);


    // const switchFullStyle = (isFull: boolean) => {
    //     const HeaderClasslist = document.getElementById("Header")?.classList;
    //     const StatusClasslist = document.getElementById("StatusWrapper")?.classList;
    //     switch (isFull) {
    //         case true:
    //             HeaderClasslist?.add(styles.withHeaderFull);
    //             StatusClasslist?.add(stylesStatus.withHeaderFull);
    //             break;
    //         case false:
    //             HeaderClasslist?.remove(styles.withHeaderFull);
    //             StatusClasslist?.remove(stylesStatus.withHeaderFull);
    //             break;
    //     };
    // };


    // const searchPlaceholder = () => {
    //     switch (true) {
    //         case (window.innerWidth > 470):
    //             return `Введите артикулы через пробел, enter, ";" или ","`;
    //         case (window.innerWidth > 400):
    //             return `Артикулы через пробел, enter, ";" или ","`;
    //         case (window.innerWidth > 350):
    //             return `Введите артикулы через пробел`;
    //         default:
    //             return "Введите артикулы";
    //     }
    // };

    // function onSearchFormSubmit(event: React.FormEvent) {
    //     event.preventDefault();
    //     let tar = event.target as HTMLFormElement;
    //     getItemsFromSearch(tar.inputname.value);
    //     tar.inputname.value = "";
    // };

    // const onAuthFormSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     let tar = event.target as HTMLFormElement;
    //     if (stringToHash(tar.inputname.value) === 1071169842) {
    //         document.cookie = encodeURIComponent("AuthStatus") + "=" + encodeURIComponent(true) + ";max-age=5184000";
    //         dispatch(login());
    //         toast.dismiss();
    //     } else errorToast();
    //     tar.inputname.value = "";
    // };

    // const onLoginClick = () => {
    //     if (isLogined) {
    //         dispatch(logout());
    //     } else if (getCookie("AuthStatus")) {
    //         dispatch(login());
    //     } else {
    //         loginToast(onAuthFormSubmit);
    //     };
    // };


    // let scrollPrev = 0;
    // window.onscroll = () => {
    //     const scrolled = window.scrollY;
    //     if (scrolled > 50 && scrolled > scrollPrev) {
    //         document.getElementById("Header")?.classList.add(styles.out);
    //     } else {
    //         document.getElementById("Header")?.classList.remove(styles.out);
    //     }
    //     scrollPrev = scrolled;
    // };

    // window.onwheel = (event) => {
    //     if (!window.scrollY && isLogined && window.innerWidth > 700 && areItemsAdded) {
    //         switchFullStyle(event.deltaY < 0);
    //     };
    // };


    return (
        <header id="Header">
            <h1 className={styles.h1} >МУЗЕЙ ЛЕНИНА</h1>
            <h2>Частная коллекция</h2>
        </header>
    )
}

export default Header;
