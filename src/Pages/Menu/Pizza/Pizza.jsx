import { useEffect, useState } from "react";
import SinglePizza from "./SinglePizza";

const Pizza = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const pizzas = data.filter(pizza => pizza.category === "pizza")
                setMenu(pizzas)
            })
    }, [])
    return (
        <div className="mt-20 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5">
                {
                    menu.map(pizza => <SinglePizza key={pizza._id} pizza={pizza}></SinglePizza>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default Pizza;