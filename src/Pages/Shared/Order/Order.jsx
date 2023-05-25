import FoodCard from "../../../Components/FoodCard/FoodCard";

const Order = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-self-center mb-20'>
        {
            items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
        }
    </div>
    );
};

export default Order;