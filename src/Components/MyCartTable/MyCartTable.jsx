import useCart from "../../customHooks/useCart";
import CartTableBody from "./CartTableBody";


const MyCartTable = ({handleDelete}) => {
    const [cart] = useCart();
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className="bg-[#D1A054]"></th>
                        <th className="bg-[#D1A054] uppercase text-white font-semibold">Item Image</th>
                        <th className="bg-[#D1A054] uppercase text-white font-semibold">Item name</th>
                        <th className="bg-[#D1A054] uppercase text-white font-semibold">Price</th>
                        <th className="bg-[#D1A054] uppercase text-white font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.map((item, index) => <CartTableBody key={item._id} item={item} index={index} handleDelete={handleDelete}></CartTableBody>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default MyCartTable;