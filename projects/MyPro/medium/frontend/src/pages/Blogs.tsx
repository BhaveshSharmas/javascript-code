import { Navigate } from "react-router-dom";
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlog } from "../hooks"
import { Skeleton } from "../components/skeleton";

export const Blogs = () => {
  //now ways to make it dynamic
  //store it diectly
  //store is state
  //store it in a context valirable??
  //create our own custom hooks

  const { blogs, loading } = useBlog();

  if (loading == true) {
    return <div>
      <Appbar lable="new"></Appbar>
      <div className="flex flex-col justify-center items-center">
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </div>
    </div>
  }

  return (
    <div>
      <Appbar lable="new" />
      <div className="flex justify-center">
        <div className="bg-green w-[40%] cursor-pointer">
          {blogs.map((res) => (
            <BlogCard
              id={res.id}
              authorName={res.author.name || "Anonymous"} // you might want to fetch author name separately based on this id
              title={res.title}
              publishDate="9 Oct 2025" // since you don't have date info, put placeholder
              content={res.content}
            />
          ))}
        </div>
      </div>
    </div>
  );


}