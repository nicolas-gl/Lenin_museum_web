import React from 'react'
import styles from './Content.module.scss'
import Filter from './Filter';

// type Props = {}


const onSearchFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Ищем ${event.currentTarget.inputname.value}`)
    event.currentTarget.inputname.value = '';
}

const Content = () => {
    return (
        <div className={styles.content}>
            <form className={styles.search} id="search" onSubmit={onSearchFormSubmit}>
                <input name="inputname" type="text" placeholder={"Поиск"} autoComplete={"off"} />
                <button type="submit" value="Submit" >
                    <img src="assets/img/icons/search.svg" alt="search" />
                </button>
            </form>
            <h2>КОЛЛЕКЦИЯ</h2>
            <div className={styles.container}>
                <Filter />
                <div className={styles.itemsBlock}>
                    <img src="https://uole-museum.ru/wp-content/uploads/2024/04/IMG_20240422_230951_869.jpg" alt="" />
                    <img src="https://i.postimg.cc/T2WKQ4Ms/Whats-App-Image-2025-06-26-at-12-25-55.jpg" alt="" />
                    <img src="https://i.etsystatic.com/14445756/r/il/820ed1/1177567711/il_570xN.1177567711_ovxm.jpg" alt="" />
                    <img src="https://i.postimg.cc/MGTTBsmd/Whats-App-Image-2025-06-26-at-12-25-56.jpg" alt="" />
                    <img src="https://i.postimg.cc/HsDVN9Tk/Whats-App-Image-2025-06-26-at-12-25-56-1.jpg" alt="" />
                                                            
                    <img src="https://i0.wp.com/lenin.shm.ru/wp-content/uploads/2020/11/13.-gim-111810-98_1.jpg?fit=991%2C1500&ssl=1" alt="" />
                    <img src="https://lh5.googleusercontent.com/proxy/EcZ6ZxiTEDHk4YVlfR_wjn0kXYjXvA1bPf9Ax4otZLrcbpoFw-37iXXFBmeRSxllivRZ7vA3uuWiIq-O4o14NIlpD_M3vEZ016SwaGrbx6v-o9AoyH_3kqGnd4DN" alt="" />
                    <img src="https://museumanapa.ru/wp-content/uploads/2021/10/IMG_3077-1024x784.jpg" alt="" />
                    <img src="https://i.postimg.cc/WbGhcq46/Whats-App-Image-2025-06-26-at-12-25-56-2.jpg" alt="" />
                    <img src="https://i.postimg.cc/MpzX6ZMk/Whats-App-Image-2025-06-26-at-12-25-56-3.jpg" alt="" />
                    
                    
                    <img src="https://www.yuga.ru/media/5c/fc/sin_1561(3)__jkf404l.jpg" alt="" />
                    <img src="https://akcia-antique.ru/wp-content/uploads/69947-384x512.jpg" alt="" />
                    <img src="https://sothebys-com.brightspotcdn.com/dims4/default/b7e8f0d/2147483647/strip/true/crop/1855x2000+0+0/resize/2880x3105!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot-migration.s3.amazonaws.com%2F81%2Fe8%2F5f%2F4840476fa5eccdee04028eda6117d73b5f004ba4656b51da8bdc4a3c87%2F259l14232-7bm9g.jpg" alt="" />
                    <img src="https://i.postimg.cc/L8v5ndLJ/Whats-App-Image-2025-06-26-at-12-25-56-4.jpg" alt="" />
                    
                    <img src="https://newkomok.ru/image/cache/data/catalog/2015/60/56/aa90d9655d81d7103fbb9b140a2569ab-1280x1280.jpg" alt="" />
                    <img src="https://i.ebayimg.com/images/g/edEAAOSwDfFjqN43/s-l400.jpg" alt="" />
                    <img src="https://i.postimg.cc/5ywNJDfN/Whats-App-Image-2025-06-26-at-12-25-57.jpg" alt="" />
                    
                    <img src="https://i.ebayimg.com/images/g/TXgAAOSwVTpeMWTT/s-l1200.jpg" alt="" />
                    <img src="https://cs13.pikabu.ru/post_img/big/2021/01/10/5/1610261880218022465.png" alt="" />
                    <img src="https://uraloved.ru/images/history/lenin/pamyatniki-leninu-9.jpg" alt="" />
                    <img src="https://i.postimg.cc/mkx20Tf5/Whats-App-Image-2025-06-26-at-12-25-57-2.jpg" alt="" />
                    <img src="https://i.postimg.cc/NM2jJ5VX/Whats-App-Image-2025-06-26-at-12-25-57-1.jpg" alt="" />
                    
                    <img src="https://uraloved.ru/images/history/lenin/pamyatniki-leninu-11.jpg" alt="" />
                    <img src="https://www.ostmuzey.ru/wp-content/uploads/2019/12/kgpFDS0HWAo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content;
