import style from "./carousel.module.css"
import CarouselItem from '../carouselItem/CarouselItem';
import { data } from "../../data/stays"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
function Carousel() {
    return (
        <div className={style.container}>
            <h3>بومگردی‌های اختصاصی مکان در جنوب</h3>
            <h5>بومگردی تو جنوب با ما</h5>
            <Swiper
                className={style.swiper}
                dir="rtl"
                spaceBetween={20}
                slidesPerView={6}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    data.map((stay, idx) => (
                        <SwiperSlide key={idx}> <CarouselItem data={stay} /> </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

export default Carousel;