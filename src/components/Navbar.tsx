import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()

    const isActive = (path: string) => {
        if (path === "/") return location.pathname === "/"
        return location.pathname === path || location.pathname.startsWith(path + "/")
    }

  return (
    <nav className="  flex items-center justify-between bg-[#ffff] w-full py-5 shadow-2xs px-20 box-border">
        <div>
            <h1 className=" text-2xl font-semibold">Logo</h1>
        </div>
        <ul className=" flex gap-10">
            <li className=" transition">
                <Link to="/" className={`${isActive("/") ? "text-[#6600ff]" : "hover:text-[#6600ff]"}`} >Home</Link>
            </li> 
            <li className=" transition">
                <Link to="/blogs" className={`${isActive("/blogs") ? "text-[#6600ff]" : "hover:text-[#6600ff]"}`} >Blogs</Link>
            </li> 
        </ul>
    </nav>
  )
}

export default Navbar