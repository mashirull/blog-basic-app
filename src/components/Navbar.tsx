import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="  flex items-center justify-between bg-[#ffff] w-full py-5 shadow-2xs px-20">
        <div>
            <h1 className=" text-2xl font-semibold">Logo</h1>
        </div>
        <ul className=" flex gap-10">
            <li>
                <Link to={"/"} >Home</Link>
            </li> 
            <li>
                <Link to={"/blogs"} >Blogs</Link>
            </li> 
        </ul>
    </nav>
  )
}

export default Navbar