
import { useNavigate } from "react-router-dom"
import type { Blog } from "../types/types"


const BlogCard = ({ image, title, excerpt, date, category , slug}: Blog) => {

    const navigator =  useNavigate()

    return (
        <div className=" w-[340px] h-[455px] shadow-sm p-4 rounded-sm bg-white relative hover:shadow-xl hover:translate-y-1 transition-all">
            <figure className=" w-fit">
                <img src={image} alt="random" className=" w-full h-fit" />
            </figure>
            <p className=" text-xs font-medium primary_text py-4">{category}</p>
            <h1 className=" text-gray-900 font-semibold text-lg">{title}</h1>
            <p className=" text-gray-700 text-sm py-2.5">{excerpt.slice(0,90)}...</p>
            <p className=" text-sm text-gray-600"> Published On : {date}</p>
            <div className=" absolute bottom-3 right-3 group">
                <button className=" py-1 px-4 text-sm font-normal rounded-3xl text-[#6600ff] hover:bg-[#6600ff] border-1 border-[#6600ff]   mt-3 cursor-pointer bg-white group-hover:text-[#ffff]  transition-all" onClick={()=>navigator(`/blogs/${slug}`)}>Read More</button>
            </div>
        </div>
    )
}

export default BlogCard