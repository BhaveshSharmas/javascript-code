import { Avatar } from "../components/BlogCard"

interface fullBlogTypes {
    title: string,
    content: string,
    authorName: string,
    publishDate: string
}

export const FullBlog = ({ title, content, authorName, publishDate }: fullBlogTypes) => {
    console.log("title"+title);
    
    return <div className="bg-red grid grid-cols-10 my-20 mx-20">
        <div className="col-span-7 bg-pink mx-10">
            <div className="text-6xl tracking-normal font-extrabold w-[80%] bg-green">
                {title}
            </div>
            <div className="my-4 text-slate-400 text-lg bg-white">{publishDate}</div>
            <div className="tracking-wide text-gray-700 text-lg">{content}</div>
        </div>
        <div className="text-lg col-span-3 bg-gray mx-0">
            Author
            <div className="grid grid-cols-10 bg-green my-4">
                <div className="col-span-1 bg-red flex justify-center items-center">
                    <div className='bg-green inline-flex'>
                        <div className={`inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-200`}>
                            <span className="font-medium text-gray-300 dark:text-gray-300"></span>
                        </div></div>
                </div>
                <div className="col-span-9">
                    <div className="mb-3 text-3xl tracking-normal font-extrabold">
                        {authorName}
                    </div>
                    <div className="text-slate-400 text-md">
                        Master od mirth, purceyor id puns, and the funniest person in the kingdom.
                    </div>
                </div>
            </div>

        </div>
    </div>
}