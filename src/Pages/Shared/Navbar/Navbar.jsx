import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useCart from '../../../customHooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error('error', error.message);
            })
    }
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
                            <li><NavLink className='focus:text-yellow-300' to="dashboard/myCart"><div>
                                <div className="badge badge-xs">+ {cart.length || 0}</div>
                                <FaShoppingCart className='' size={23}></FaShoppingCart>
                            </div>
                            </NavLink></li>
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
                            <li><Link className='focus:text-yellow-300' to="/dashboard/myCart"><div>
                                <div className="badge badge-xs">+ {cart.length || 0}</div>
                                <FaShoppingCart className='' size={23}></FaShoppingCart>
                            </div>
                            </Link></li>
                        </ul>
                    </div>
                    {
                        !user ?
                            <Link to="/login"><div className="btn btn-outline uppercase text-white active:text-yellow-600 border-0 hover:bg-transparent">sign in</div></Link> :
                            <>
                                <button onClick={handleLogout} className="btn btn-outline uppercase text-white active:text-yellow-600 border-0 hover:bg-transparent">sign out</button>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <div className="avatar">
                                        <div className="w-8 lg:w-14 rounded-full">
                                            <img src={user?.photoURL} className='' referrerPolicy="no-referrer" />
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                    {/* <FaUserCircle className='text-white text-3xl'></FaUserCircle> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;