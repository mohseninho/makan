import Header from "../../components/Header/Header";
import style from "./home.module.css"
import cover from "../../assets/img/cover.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../components/carousel/Carousel";

function Home() {
    return (
        <>
            <Header />
            <div className={style.landing}>
                <img className={style.cover} src={cover} alt="" />
                <div className={style.searchBar}>
                    <div className={style.searchPlace}>جستجوی شهر، استان یا اقامتگاه</div>
                    <div className={style.entryDate}>تاریخ ورود</div>
                    <div className={style.exitDate}>تاریخ خروج</div>
                    <div className={style.passengers}>تعداد نفرات</div>
                    <div className={style.search}><button><FontAwesomeIcon icon={faMagnifyingGlass} /></button></div>
                </div>

                <div className={style.message}>
                    <h5>اجاره ویلا، سوئیت و اقامتگاه در شمال و سراسر ایران</h5>
                    <h1>سفر بهاری از تو، مکان با ما</h1>
                </div>
                <div className={style.serviceContainer}>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1108182/b515b028-d490-4198-9385-7fa1ae0daa44.jpg" alt="logo" />
                        <p>تجربه</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1297502/95035029-1b13-4bc8-9dde-a74438062e7f.jpg" alt="" />
                        <p>پیشنهاد ویژه</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1495473/5e8d2e95-35ee-4f25-8a5a-9056c74741b9.png" alt="" />
                        <p>آپارتمان</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1297502/24aa191b-4d8e-433d-a337-6f57ee6fefce.png" alt="" />
                        <p>ساحلی</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1495473/c669a974-ebf9-40b5-a2c8-4892adb7b7af.png" alt="" />
                        <p>استخردار</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1495473/2a9c0829-85a1-479d-8ef9-94ebf4729449.png" alt="" />
                        <p>بومگردی</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1495473/0e88260b-ccb2-4998-a5b4-31014160a91f.png" alt="" />
                        <p>کلبه</p>
                    </div>
                    <div>
                        <img src="https://cdn.jabama.com/image/jabama-images/1495473/cd2d4660-005a-4b97-a56d-2ff139df547c.png" alt="" />
                        <p>ویلا</p>
                    </div>
                </div>
                <Carousel />
                <Carousel />
                <Carousel />
                <Carousel />
            </div>
        </>
    );
}

export default Home;