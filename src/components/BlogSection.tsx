import BlogCard from "./BlogCard"
import { blog_data } from "../assets/Data/Data"
import type { Blog } from "../types/types"


const BlogSection = ({num}:{num:number}) => {
    return (
        <div className=" grid grid-cols-3 content-center gap-7 px-32 pt-16 pb-8">
            {blog_data.slice(0,num).map((blog: Blog) => (
                <BlogCard  key={blog.id} image= {blog.image} category= {blog.category} date= {blog.date} excerpt= {blog.excerpt}  title= {blog.title} id={blog.id}  slug= {blog.slug}   />
            ))}
        </div>
    )
}

export default BlogSection