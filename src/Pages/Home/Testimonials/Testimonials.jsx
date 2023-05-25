import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data)
            })
    }, [])
    return (
        <div className="w-10/12 mx-auto">
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}>
            </SectionTitle>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="text-center flex flex-col items-center mx-20 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="w-24 h-24 my-5 lg:my-10"></FaQuoteLeft>
                            <p className="">{review.details}</p>
                            <p className="text-2xl text-yellow-600">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;