import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface BlogCardTypes {
    id:string,
    authorName: string,
    title: string,
    publishDate: string,
    content: string
}


export const BlogCard = ({ id, authorName, title, publishDate, content }: BlogCardTypes) => {

    // console.log(id,authorName,title,publishDate,content); state={{id,authorName,title,content,publishDate}}
    
    return <Link to={`/blog/${id}`} >
        <div className="bg-red w-full mx-auto">
            <div className="bg-green p-5 shadow rounded-lg my-4">
                <div className="bg-white w-parent">
                    <div className="text-xs text-slate-500">
                        <div className='inline mr-3'><Avatar avname="B" size='small' /></div>
                        {authorName} {publishDate}
                    </div>
                    <div className="mt-2 text-xl font-bold w-[60%]">
                        {title}
                    </div>
                    <div className="text-sm mt-1 text-gray-400 tracking-wide">{content.slice(0, 100) + "..."}</div>
                    <div className="text-xs text-gray-500 mt-6 flex justify-between">
                        <div>3 mins read</div>
                        <div>icons</div>
                    </div>
                </div>
            </div>
        </div></Link>
}

export const Avatar = ({ avname, size = "small" }: { avname: string, size?: "small" | "big" }) => {
    return <div className='bg-green inline-flex'>
        <div className={`inline-flex items-center justify-center ${size == "small" ? "w-6" : "w-10"} ${size == "small" ? "h-6" : "h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-gray-600 dark:text-gray-300">{avname}</span>
        </div></div>
}