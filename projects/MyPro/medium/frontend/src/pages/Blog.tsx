import { useLocation, useParams } from "react-router-dom"
import { BlogCard } from "../components/BlogCard";
import { useBlog, useBlogs } from "../hooks";
import { FullBlog } from "./FullBlog";
import { Appbar } from "../components/AppBar";
import { Skeleton } from "../components/skeleton";

export const Blog = () => {
    const { id } = useParams()
    console.log(id);
    
    // const { state } = useLocation();
    // const {id} = state
    const { blog, loading } = useBlogs({ id: String(id) });
    console.log(blog);

    if (loading) {
        return <div>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
        </div>
    }

    return <div>
        <Appbar lable="new"></Appbar>
        {blog.map((res) => (
            <FullBlog
                title={res.title}
                content={res.content}
                authorName={res.author.name || "Anonymous"} // you might want to fetch author name separately based on this id
                publishDate="9 Oct 2025" // since you don't have date info, put placeholder
            />
        ))}
    </div>
}


    // const { state } = useLocation();
    // const { id, authorName, title, content, publishDate } = state || {};

    // return <div className="bg-green">
        
    // </div>