import { Link, NavLink } from 'react-router-dom';
import cartIcon from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='container'>
            <div className="navbar fixed z-10 bg-opacity-40  bg-black lg:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/contact">CONTACT US</NavLink></li>
                            <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
                            <li><NavLink to="/menu">OUR MENU</NavLink></li>
                            <li><NavLink to="/shop/salad">OUR SHOP</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-end">
                    <div className=' hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1">
                            <li><Link className='focus:text-yellow-300' to="/">Home</Link></li>
                            <li><Link className='focus:text-yellow-300' to="/contact">CONTACT US</Link></li>
                            <li><Link className='focus:text-yellow-300' to="/dashboard">DASHBOARD</Link></li>
                            <li><Link className='focus:text-yellow-300' to="/menu">OUR MENU</Link></li>
                            <li><Link className='focus:text-yellow-300' to="/shop/salad">OUR SHOP</Link></li>
                        </ul>
                    </div>
                    <img src={cartIcon} alt="" className='h-6 lg:h-10' />
                    <Link to="/login"><div className="btn btn-outline uppercase text-white active:text-yellow-600 border-0 hover:bg-transparent">sign in</div></Link>
                    <FaUserCircle className='text-white text-3xl'></FaUserCircle>
                    {/* <div className="btn btn-outline uppercase text-white active:text-yellow-600 border-0 hover:bg-transparent">sign out</div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;