import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const SwipFood = () => {
    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiperr"
                
            >
                <SwiperSlide><img src={slide1} alt="" /><h3 className="-mt-16 uppercase lg:text-3xl text-center text-white">Salads</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h3 className="-mt-16 uppercase lg:text-3xl text-center text-white">Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h3 className="-mt-16 uppercase lg:text-3xl text-center text-white">pizzas</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h3 className="-mt-16 uppercase lg:text-3xl text-center text-white">desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h3 className="-mt-16 uppercase lg:text-3xl text-center text-white">Salads</h3></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwipFood;