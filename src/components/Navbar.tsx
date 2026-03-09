import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const isActive = (path: string) => {
        if (path === "/") {
            return location.pathname === "/"
        } else {
            return location.pathname === path 
        }
    }

    return (
        <nav className="flex items-center justify-between bg-white w-full py-5 shadow-2xs px-4 md:px-20 box-border relative">
            <div className="flex items-center gap-4">
                <h1 className=" text-2xl font-semibold">Logo</h1>
            </div>

            {/* Desktop links */}
            <ul className="hidden md:flex gap-8 items-center">
                <li className=" transition">
                    <Link to="/" className={`${isActive("/") ? "text-[#6600ff]" : "hover:text-[#6600ff]"}`} onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li className=" transition">
                    <Link to="/blogs" className={`${isActive("/blogs") ? "text-[#6600ff]" : "hover:text-[#6600ff]"}`} onClick={() => setMenuOpen(false)}>Blogs</Link>
                </li>
            </ul>

            {/* Mobile toggle */}
            <div className="md:hidden">
                <button aria-label="Toggle menu" className="p-2 rounded-md focus:outline-none" onClick={() => setMenuOpen(prev => !prev)}>
                    {menuOpen ? (

                        <span className=" text-3xl">
                            <MdClose />
                        </span>
                    ) : (
                        <span className=" text-3xl">
                            <MdMenu />
                        </span>
                    )}
                </button>
            </div>

            {/* navbar for mobile */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 z-50">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="/" className={`block py-2 px-3 ${isActive("/") ? "text-[#6600ff]" : "hover:text-[#6600ff]"}`} onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className={`block py-2 px-3 ${isActive("/blogs") ? "text-[#6600ff]" : "hover:text-[#6600ff]"}`} onClick={() => setMenuOpen(false)}>Blogs</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar