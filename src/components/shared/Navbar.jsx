import { Link, NavLink } from "react-router-dom";
import DiaryCard from "../DiaryCard";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                {/* Logo: Personal Diary */}
                <Link to="/" className="btn btn-ghost text-xl">My Personal Diary</Link>
            </div>

            <div className="flex items-center gap-4">

                {/* Nav items */}
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `hover:underline ${isActive ? "font-semibold underline" : ""}`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/DisplayDiaryCard"
                    className={({ isActive }) =>
                        `hover:underline ${isActive ? "font-semibold underline" : ""}`
                    }
                >
                    My Diaries
                </NavLink>

                {/* button for write new diary */}
                <Link
                    to="/Diary"
                    className="rounded-lg px-3 py-2 text-sm font-medium bg-black text-yellow-50 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
                >
                    Write New Diary
                </Link>
                {/* UserProfi */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to="" className="justify-between">
                                sign in
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;