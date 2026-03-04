import { blog_data } from "../../assets/Data/Data"
import BlogSection from "../../components/BlogSection"


const Home = () => {
    return (
        <>
            <div className=" flex flex-col h-[85dvh] justify-center items-center px-20">
                <h1 className=" text-6xl font-semibold pb-3 text-[#4D3C85] ">Welcome to My Tech Journey {}</h1>
                <p className=" text-[#8463D0] text-lg text-center"> I share practical guides, coding tips, project ideas, and real-world experiences <br /> in full-stack development.</p>
                <div>

                    <button className=" py-2 px-9 bg-[#6600ff] border-2 rounded-3xl text-[#ffff] mt-3 cursor-pointer hover:bg-white hover:text-[#4D3C85] transition-all">Explore Now</button>
                </div>
            </div>
            {/* our feature blog section */}

            <div>
                <h1 className=" text-center text-3xl text-gray-900 font-medium ">Our Features Blog</h1>
                <BlogSection num={3}/>
                <div className=" text-center pb-6">
                <button className=" py-2 px-9 bg-[#6600ff] border-2 rounded-3xl text-[#ffff] mt-3 cursor-pointer hover:bg-white hover:text-[#4D3C85] transition-all ">See More</button>
                </div>
            </div>

        </>
    )
}

export default Home