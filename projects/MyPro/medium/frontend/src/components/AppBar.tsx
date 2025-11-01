import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = ({lable}:{lable:string}) => {
    return <div className="flex justify-between items-center px-10 py-7  h-10 bg-green shadow cursor-pointer">
        <Link to={'/'}>
            Medium-logo
        </Link>
        <div>
            <button className="focus:outline-none focus:ring-green-700 focus:ring-4 hover:bg-green-500 bg-green-700 text-white rounded-full px-5 py-2 mr-10">{lable}</button>
            <Avatar avname={"B"} size="big"></Avatar>
        </div>
    </div>
}