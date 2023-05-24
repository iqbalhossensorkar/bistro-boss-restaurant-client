import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../BannerCompo/Banner";
import CallUs from "../CallUs/CallUs";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import ChefService from "../ChefService/ChefService";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import SwipFood from "../SwipFoodCompo/SwipFood";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <>
            <div className="container mx-auto">
                <Banner></Banner>
            </div>
            <div className="my-32">
                <SwipFood></SwipFood>
            </div>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <div className="w-10/12 mx-auto mb-20">
                <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></SectionTitle>
                <ChefRecommend></ChefRecommend>
            </div>
            <FromOurMenu></FromOurMenu>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;