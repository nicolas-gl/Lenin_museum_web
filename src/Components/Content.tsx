import React from 'react'
import styles from './Content.module.scss'
import Filter from './Filter';

// type Props = {}

const images = [
    "https://i.postimg.cc/DwvszRmY/Whats-App-Image-2025-06-26-at-16-27-30.jpg",
    "https://i.postimg.cc/wvmRPpb3/Whats-App-Image-2025-06-26-at-16-27-30-1.jpg",
    "https://i.postimg.cc/JzYyznfG/Whats-App-Image-2025-06-26-at-16-27-30-10.jpg",
    "https://i.postimg.cc/133nS6Yk/Whats-App-Image-2025-06-26-at-16-27-30-11.jpg",
    "https://i.postimg.cc/N0yK9ttb/Whats-App-Image-2025-06-26-at-16-27-30-12.jpg",
    "https://i.postimg.cc/VN3dXhLw/Whats-App-Image-2025-06-26-at-16-27-30-13.jpg",
    "https://i.postimg.cc/Twgh0cpD/Whats-App-Image-2025-06-26-at-16-27-30-14.jpg",
    "https://i.postimg.cc/zvkvZXwD/Whats-App-Image-2025-06-26-at-16-27-30-15.jpg",
    "https://i.postimg.cc/44vmhBCC/Whats-App-Image-2025-06-26-at-16-27-30-16.jpg",
    "https://i.postimg.cc/L5S5bZ10/Whats-App-Image-2025-06-26-at-16-27-30-17.jpg",
    "https://i.postimg.cc/kXnDNK92/Whats-App-Image-2025-06-26-at-16-27-30-18.jpg",
    "https://i.postimg.cc/dV5CZnyQ/Whats-App-Image-2025-06-26-at-16-27-30-2.jpg",
    "https://i.postimg.cc/fbk9cXcc/Whats-App-Image-2025-06-26-at-16-27-30-3.jpg",
    "https://i.postimg.cc/xd7btC5W/Whats-App-Image-2025-06-26-at-16-27-30-4.jpg",
    "https://i.postimg.cc/90HwHnvb/Whats-App-Image-2025-06-26-at-16-27-30-5.jpg",
    "https://i.postimg.cc/br0DyRPh/Whats-App-Image-2025-06-26-at-16-27-30-6.jpg",
    "https://i.postimg.cc/dQGTjJyx/Whats-App-Image-2025-06-26-at-16-27-30-7.jpg",
    "https://i.postimg.cc/dtvZWgRt/Whats-App-Image-2025-06-26-at-16-27-30-8.jpg",
    "https://i.postimg.cc/Hs2cF330/Whats-App-Image-2025-06-26-at-16-27-30-9.jpg",
    "https://i.postimg.cc/HsBn6nsB/Whats-App-Image-2025-06-26-at-16-27-58.jpg",
    "https://i.postimg.cc/cLCH2WvZ/Whats-App-Image-2025-06-26-at-16-28-14.jpg",
    "https://i.postimg.cc/pLSTtSjj/Whats-App-Image-2025-06-26-at-16-28-24.jpg",
    "https://i.postimg.cc/LsZs4Vkb/Whats-App-Image-2025-06-26-at-16-28-37.jpg",
    "https://i.postimg.cc/FRys3sBb/Whats-App-Image-2025-06-26-at-16-28-54.jpg",
    "https://i.postimg.cc/0QRyzJc2/Whats-App-Image-2025-06-26-at-17-27-26.jpg",
]


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
                    {images.map((url) =>
                        <div>
                            <img src={url} alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Content;
