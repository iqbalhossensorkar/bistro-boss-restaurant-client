import { useEffect, useState } from "react";
import SingleSalad from "./SingleSalad";


const Salad = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const salads = data.filter(salad => salad.category === "salad")
                setMenu(salads)
            })
    }, [])
    return (
        <div className="mt-20 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5">
                {
                    menu.map(salad => <SingleSalad key={salad._id} salad={salad}></SingleSalad>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Salad;