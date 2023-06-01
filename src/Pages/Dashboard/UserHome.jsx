import { GiWallet } from "react-icons/gi";
import { CgPhone } from "react-icons/cg";
import { IoStorefront } from "react-icons/io5";
import UserProfile from "../../Components/UserHome/UserProfile";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
    return (
        <div className="m-5">
            <Helmet>
                <title>User Home - Bistro Boss</title>
            </Helmet>
            <h1 className="uppercase md:text-3xl font-serif pt-5">Hi, welcome back!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div className="flex items-center justify-center gap-2  text-white  bg-gradient-to-r from-[#BB34F5] to-[#FBDBFF] py-7 rounded-lg">
                    <GiWallet size={40}></GiWallet>
                    <div>
                        <p className="text-3xl font-bold">205</p>
                        <p className="text-xl">Menu</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-white  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] py-7 rounded-lg font-bold">
                    <IoStorefront size={40}></IoStorefront>
                    <div>
                        <p className="text-3xl font-bold">109</p>
                        <p className="text-xl">Shop</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-white  bg-gradient-to-r from-[#FE4880] to-[#FECCE8] py-7 rounded-lg">
                    <CgPhone size={40}></CgPhone>
                    <div>
                        <p className="text-3xl font-bold">03</p>
                        <p className="text-xl">Contact</p>
                    </div>
                </div>
            </div>
            <UserProfile></UserProfile>
        </div>
    );
};

export default UserHome;