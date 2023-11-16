import { useRef } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../../../styles/swiper.css"
import Slide from "./Slide";

const WayangSlider = () => {
    const sliderRef = useRef<SwiperRef>(null);
    const wayangImages = [
        '/images/wayang/bagong.png',
        '/images/wayang/krisna.png',
        '/images/wayang/semar.png',
        '/images/wayang/werkudara.png',
        '/images/wayang/semar.png',
    ]

    return (
        <Swiper
            ref={sliderRef}
            onInit={() => { }}
            effect="coverflow"
            initialSlide={2}
            grabCursor
            centeredSlides
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            spaceBetween={20}
            modules={[EffectCoverflow, Pagination, Navigation]}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            className="swiper_container mx-3">
            {
                wayangImages.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Slide url={image}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default WayangSlider;
