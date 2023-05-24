import { useEffect, useState } from "react";
import SingleSoup from "./SingleSoup";


const Soup = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const soups = data.filter(soup => soup.category === "soup")
                setMenu(soups)
            })
    }, [])
    return (
        <div className="mt-20 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5">
                {
                    menu.map(soup => <SingleSoup key={soup._id} soup={soup}></SingleSoup>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Soup;