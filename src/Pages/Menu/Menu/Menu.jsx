import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover&page/Cover";
import menuCover from '../../../assets/menu/banner3.jpg'
import chefCover from '../../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
import saladCover from '../../../assets/menu/salad-bg.jpg'
import soupCover from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from "./MenuCategory";
import useMenu from "../../../customHooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")

    return (
        <div>
            <Helmet>
                <title className="">Our Menu - Bistro Boss</title>
            </Helmet>
            <Cover height={"lg:h-screen h-96"} img={menuCover} title={"OUR MENU"} subtitle={"Would you like to try a dish?"}></Cover>
            <div className="mt-20">
                <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            </div>
            <div className="mt-10">
                <MenuCategory item={offered}></MenuCategory>
            </div>
            <div className="mt-10">
                <MenuCategory item={dessert} img={chefCover} title={"Dessert"}></MenuCategory>
            </div>
            <div className="mt-10">
                <MenuCategory item={pizza} img={pizzaCover} title={"Pizza"}></MenuCategory>
            </div>
            <div className="mt-10">
                <MenuCategory item={salad}  img={saladCover} title={"Salad"}></MenuCategory>
            </div>
            <div className="mt-10">
                <MenuCategory item={soup} img={soupCover} title={"Soup"}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;