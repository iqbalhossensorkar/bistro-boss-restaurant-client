import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover&page/Cover";
import shopCover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../customHooks/useMenu";
import Order from "../Shared/Order/Order";
import { useParams } from "react-router-dom";


const Ourshop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Our Shop - Bistro Boss</title>
            </Helmet>
            <Cover title={"OUR SHOP"} subtitle={"Would you like to try a dish"} height={"h-96 lg:h-screen"} img={shopCover}></Cover>
            <div className="w-10/12 mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="border-none font-bold text-lg flex justify-center gap-3 lg:gap-10 mt-20 mb-10">
                        <Tab className="focus:text-yellow-600 cursor-pointer focus:underline decoration-4 underline-offset-8 uppercase">SALAD</Tab>
                        <Tab className="focus:text-yellow-600 cursor-pointer focus:underline decoration-4 underline-offset-8 uppercase">PIZZA</Tab>
                        <Tab className="focus:text-yellow-600 cursor-pointer focus:underline decoration-4 underline-offset-8 uppercase">soups</Tab>
                        <Tab className="focus:text-yellow-600 cursor-pointer focus:underline decoration-4 underline-offset-8 uppercase">desserts</Tab>
                        <Tab className="focus:text-yellow-600 cursor-pointer focus:underline decoration-4 underline-offset-8 uppercase">drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <Order items={salad}></Order>
                    </TabPanel>
                    <TabPanel>
                        <Order items={pizza}></Order>
                    </TabPanel>
                    <TabPanel>
                        <Order items={soup}></Order>
                    </TabPanel>
                    <TabPanel>
                        <Order items={dessert}></Order>
                    </TabPanel>
                    <TabPanel>
                        <Order items={drinks}></Order>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Ourshop;