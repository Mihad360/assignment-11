import { NavLink,Link } from "react-router-dom";
import {useContext} from "react"
import { Authcontext } from "../authcontext/Authprovider";
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {

    const { user, logout } = useContext(Authcontext)

    const handlelogout = () => {
        logout()
            .then()
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark")
    }

    const links = <div className="flex flex-col md:flex-row gap-3 items-center text-white md:text-black bg-black md:bg-white dark:text-white dark:bg-black">
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-violet-600 text-white" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/addbook"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-violet-600 text-white" : ""
            }
        >
            Add Book
        </NavLink></li>
        <li><NavLink
            to="/allbook"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-violet-600 text-white" : ""
            }
        >
            All Books
        </NavLink></li>
        <li><NavLink
            to="/borrowedbooks"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-violet-600 text-white" : ""
            }
        >
            Borrowed Books
        </NavLink></li>
    </div>

    return (
        <div>
            <div className="navbar px-16  dark:bg-black dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img className="w-40" src="https://i.ibb.co/fttg8RG/a7910cf32f182c9ea34022abb7839980.jpg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                
                <div className="navbar-end flex gap-8 md:gap-5 flex-col-reverse md:flex-row">
                    
                <div>
                {
                        user && <div className="flex items-center gap-3 ">
                            <p className="text-xl font-bold text-black dark:text-white">{user?.displayName}</p>
                            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                        </div>
                    }
                </div>
                <div>
                        <button onClick={toggleTheme} className="text-xl"><MdDarkMode></MdDarkMode></button>
                    </div>
                <div>
                {
                            user ? <Link>
                                <button onClick={handlelogout} className="btn btn-primary">Sign out</button>
                            </Link> : <Link to='/login'>
                                <button className="btn btn-primary">Login</button>
                            </Link>
                        }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;