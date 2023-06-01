import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../customHooks/useCart";


const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart();
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location);
    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, image, name, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire(
                            'Good job!',
                            'Product added to cart!',
                            'success'
                        )
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login?',
                text: "Something went wrong!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-full bg-[#F3F3F3] rounded-none">
            <figure><img src={image} alt="Shoes" className="w-full" /></figure>
            <div className="text-center card-body">
                <p className="px-4 py-2 bg-[#111827] text-white absolute top-0 mt-4 right-0 mr-4">${price}</p>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div onClick={() => handleAddToCart(item)} className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 text-yellow-600 hover:text-yellow-600 hover:border-none bg-[#E8E8E8]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;