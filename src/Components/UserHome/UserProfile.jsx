import { HiShoppingCart } from "react-icons/hi";
import { BsCalendar2PlusFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { MdPreview } from "react-icons/md";


const UserProfile = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row mt-10 mb-20">
            <div className="grid flex-grow lg:w-1/2 h-96 bg-[#FFEDD5] place-items-center">
                <div className="bg-[#FFEDD5] flex flex-col justify-center items-center">
                    <div className="avatar">
                        <div className="w-36 rounded-full border border-[#D1A054]">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <p className="text-2xl font-serif font-bold mt-5">NAME HERE</p>
                </div>
            </div>
            {/* <div className="divider lg:divider-horizontal"></div> */}
            <div className="hidden lg:block h-96 w-[2px] bg-[#D1A054]"></div>
            <div className="mt-4 lg:mt-0 lg:w-1/2 h-96 bg-[#FEF9C3] pl-20 text-left">
                <p className="text-2xl font-serif font-bold mt-20">YOUR ACTIVITIES</p>
                <div className="mt-10 font-serif font-bold">
                    <div className="flex gap-1 items-center text-[#0088FE]"><HiShoppingCart></HiShoppingCart> ORDERS:</div>
                    <div className="flex gap-1 items-center text-[#00C4A1]"><MdPreview></MdPreview> REVIEWS:</div>
                    <div className="flex gap-1 items-center text-[#FFBB28]"><BsCalendar2PlusFill></BsCalendar2PlusFill> BOOKINGS:</div>
                    <div className="flex gap-1 items-center text-[#FF8042]"><GiWallet></GiWallet> PAYMENT:</div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;