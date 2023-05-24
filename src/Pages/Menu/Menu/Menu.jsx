import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover&page/Cover";
import menuCover from '../../../assets/menu/banner3.jpg'
import TodaysOffer from "../TodaysOffer/TodaysOffer";
import chefCover from '../../../assets/menu/dessert-bg.jpeg'
import Deserts from "../Deserts/Deserts";
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
import Pizza from "../Pizza/Pizza";
import saladCover from '../../../assets/menu/salad-bg.jpg'
import Salad from "../Salad/Salad";
import soupCover from '../../../assets/menu/soup-bg.jpg'
import Soup from "./Soup/Soup";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title className="">Our Menu - Bistro Boss</title>
            </Helmet>
            <Cover height={"lg:h-screen h-96"} img={menuCover} title={"OUR MENU"} subtitle={"Would you like to try a dish?"}></Cover>
            <TodaysOffer></TodaysOffer>
            <Cover height={"h-96 lg:h-[500px]"} img={chefCover} title={"deserts"} subtitle={"Would you like to try a dish?"}></Cover>
            <Deserts></Deserts>
            <Cover height={"h-96 lg:h-[500px]"} img={pizzaCover} title={"pizza"} subtitle={"Would you like to try a dish?"}></Cover>
            <Pizza></Pizza>
            <Cover height={"h-96 lg:h-[500px]"} img={saladCover} title={"salad"} subtitle={"Would you like to try a dish?"}></Cover>
            <Salad></Salad>
            <Cover height={"h-96 lg:h-[500px]"} img={soupCover} title={"soup"} subtitle={"Would you like to try a dish?"}></Cover>
            <Soup></Soup>
        </div>
    );
};

export default Menu;