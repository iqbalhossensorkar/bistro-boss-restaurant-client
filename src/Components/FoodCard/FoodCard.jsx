

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="card w-full bg-[#F3F3F3] rounded-none">
            <figure><img src={image} alt="Shoes" className="w-full" /></figure>
            <div className="text-center card-body">
                <p className="px-4 py-2 bg-[#111827] text-white absolute top-0 mt-4 right-0 mr-4">${price}</p>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 text-yellow-600 hover:text-yellow-600 hover:border-none bg-[#E8E8E8]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;