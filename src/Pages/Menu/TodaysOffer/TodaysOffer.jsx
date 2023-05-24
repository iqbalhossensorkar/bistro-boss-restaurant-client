import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Offer from "./Offer";

const TodaysOffer = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const offereds = data.filter(offered => offered.category === "offered")
                setMenu(offereds)
            })
    }, [])
    return (
        <div className="mt-20 mb-10">
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5">
                {
                    menu.map(offered => <Offer key={offered._id} offered={offered}></Offer>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default TodaysOffer;