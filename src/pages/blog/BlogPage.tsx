import { useState } from 'react'
import { blog_data } from '../../assets/Data/Data'
import type { Blog } from '../../types/types'
import BlogCard from '../../components/BlogCard'

const BlogPage = () => {

    const [category, setCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState("")

    const categories = ["All", ...new Set(blog_data.map(blog => blog.category))]

    const filteredBlog = blog_data.filter((blog: Blog) => {
        return (
            blog.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) &&
            category === "All" || blog.category === category
        )
    })


    return (
        <div className=' px-32 py-12 min-h-[90dvh]'>
            <div >
                <input
                    type="text"
                    className=' w-full border border-gray-800 rounded-sm p-3 focus:outline-0 '
                    placeholder='Search Blog...'
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className=' flex items-center flex-wrap gap-3 mt-4'>
                    <h1 className=' text-gray-800'>Categories:</h1>
                    {categories.map((CurrentCategory, i) => (
                        <button
                            key={i}
                            className={` px-5 py-1 rounded-3xl text-[#6600ff] border border-[#6600ff] text-sm cursor-pointer hover:bg-[#6600ff] hover:text-white transition ${CurrentCategory === category && "bg-[#6600ff] text-white"} `}
                            onClick={() => setCategory(CurrentCategory)}
                        >
                            {CurrentCategory}
                        </button>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-3 content-center gap-7  pt-16 pb-8'>
                {filteredBlog.map((blog: Blog) => (
                    <BlogCard key={blog.id} image={blog.image} category={blog.category} date={blog.date} excerpt={blog.excerpt} title={blog.title} id={blog.id} slug={blog.slug} />
                ))}
            </div>
            {/* <BlogSection num={6} /> */}
        </div>
    )
}

export default BlogPage