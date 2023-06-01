import { FaTrashAlt } from "react-icons/fa";


const CartTableBody = ({ item, index, handleDelete }) => {
    const { image, name, price } = item;
    // console.log(item);
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-10 md:w-20">
                    <img src={image} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td><button onClick={() => handleDelete(item)} className="md:btn btn-sm bg-[#B91C1C] rounded-md md:bg-[#B91C1C] border-none hover:bg-[#7d1313]"><FaTrashAlt className="text-white"></FaTrashAlt></button></td>
        </tr>
    );
};

export default CartTableBody;