import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../../assets/Data/Data";
import type { Blog, Comment } from "../../types/types";
import { formatDate } from "../../lib/DateFormate";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../redux/store/store";
import { postComment } from "../../redux/slices/commentSlice";


const BlogDetails = () => {
    const param = useParams()
    const [singleBlog, setSingleBlog] = useState<Blog | null>(null)

    const { slug } = param;
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        const blog = blog_data.filter((blog) => blog.slug === slug)

        setSingleBlog(blog[0])
        if(blog.length === 0){
            setSingleBlog(null)
        }
        window.scrollTo(0,0)
    }, [slug])


    const {comments} =  useSelector((state:RootState)=>state.comments)

    const myComments =  comments.filter((cmt:Comment) =>cmt.blogId === singleBlog?.id )

    const [name, setName] = useState("");
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newComment:Comment = {
            blogId : singleBlog?.id as number,
            name ,
            commentText,
            date : Date.now() 
        };

        
        dispatch(postComment(newComment))
        setName("");
        setCommentText("");
        
    };

    if(!singleBlog){
        return <h1 className=" text-center my-40 text-3xl">Blog not found</h1>
    }

    return (
        <div className=" min-h-screen py-16 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
                <img
                    src={singleBlog?.image}
                    alt={singleBlog?.title}
                    className="w-full h-[400px] object-cover"
                />

                <div className="p-8">
                    <p className="primary_text font-medium mb-2">
                        {singleBlog?.category}
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        {singleBlog?.title}
                    </h1>

                    <p className="text-gray-400 text-sm mb-6">
                        {formatDate(singleBlog?.date as string)}
                    </p>

                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {singleBlog?.content}
                    </p>
                </div>


                {/* Comment Section */}
                <div className="bg-gray-50 p-8 border-t">
                    <h3 className="text-xl font-semibold mb-6">Comments <span className=" pl-1">({myComments.length})</span></h3>


                    <div className="space-y-6">
                        {myComments.length === 0  && <p className=" text-center text-gray-700">Not comment yet</p>}
                        {myComments.map((comment:Comment, i:number) => (
                            <div
                                key={i}
                                className="bg-white p-5 rounded-xl shadow-sm"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <p className="font-semibold text-gray-800">
                                        {comment.name}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {formatDate(comment.date as string)}
                                    </p>
                                </div>

                                <p className="text-gray-600">
                                    {comment.commentText}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-semibold mb-6 mt-6">
                        Leave a Comment
                    </h2>

                    <form onSubmit={(e)=>handleSubmit(e)} className="space-y-4 mb-10">
                        <div>
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1"
                            />
                        </div>

                        <div>
                            <textarea
                                required
                                rows= "4"
                                placeholder="Write your comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 "
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#6600ff] text-white px-4 py-2 rounded-3xl cursor-pointer hover:bg-[#4901b4]  transition "
                        >
                            Post Comment
                        </button>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default BlogDetails;