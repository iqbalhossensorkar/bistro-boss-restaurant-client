import { Helmet } from "react-helmet-async";
import { FaCalendarAlt, FaHamburger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu, GiShoppingBag, GiWallet } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { MdPreview } from "react-icons/md";
import { BsCalendar2PlusFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdMailUnread } from "react-icons/io";
import useCart from "../customHooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer drawer-mobile container mx-auto">
            <Helmet>
                <title>Dashboard - Bistro Boss</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="flex items-center justify-between bg-[#D1A054] lg:hidden p-2">
                    <label htmlFor="my-drawer-2" className="p-5 drawer-button "><FaHamburger size={24} className="active:text-white"></FaHamburger> </label>
                    <span className="font-serif font-black text-black">Bistro Boss <br />Restaurant</span>
                </div>
                <div className="bg-[#F6F6F6]">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    <h1 className="uppercase text-2xl font-serif font-black text-black mt-5">Bistro boss</h1>
                    <h1 className="uppercase text-xl font-serif font-medium text-black tracking-[.2em] mb-16">Restaurant</h1>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/dashboard/userHome'><AiFillHome></AiFillHome> USER HOME</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/dashboard/payment'><GiWallet></GiWallet>PAYMENT HISTORY</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/dashboard/myCart'><HiShoppingCart></HiShoppingCart>MY CART <span className="badge badge-secondary">+{cart.length || 0}</span></NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/dashboard/addReview'><MdPreview></MdPreview> ADD REVIEW</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/dashboard/myBooking'><BsCalendar2PlusFill></BsCalendar2PlusFill> MY BOOKING</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/'><AiFillHome></AiFillHome> HOME</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/menu'><GiHamburgerMenu></GiHamburgerMenu> MENU</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/shop/salad'><GiShoppingBag></GiShoppingBag> SHOP</NavLink></li>
                    <li><NavLink className='bg-transparent text-black focus:text-white' to='/contact'><IoMdMailUnread></IoMdMailUnread> CONTACT</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;