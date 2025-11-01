import { useState } from "react"
import { Appbar } from "../components/AppBar"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    return <div>
        <Appbar lable="Publish"></Appbar>

        <div className="flex justify-center bg-red-00 mt-2">
            <div className="max-w-screen-lg w-full bg-green-00">
                <input onChange={(e: any) => {
                    console.log(title);
                    setTitle(() => {
                        setTitle(e.target.value);
                    })
                }}
                    id="title"
                    className="w-full block resize-none p-2.5 text-sm text-gray-600 rounded-lg border border-gray-00 focus:border-red-100"
                    placeholder="Title">
                </input>
                <textarea onChange={(e: any) => {
                    console.log(content);
                    setContent(() => {
                        setContent(e.target.value);
                    })
                }} id="message" rows="10" className="mt-3 w-full block p-2.5 text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 "
                    placeholder="What's on your mind..."></textarea>

                <button onClick={async() => {
                    const response = await axios.post('http://localhost:8787/api/v1/blog/create', 
                        {
                            title,
                            content
                        },
                        {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        }
                    );

                    navigate(`/blog/${response.data.id}`)
                }} className="bg-blue-500 px-5 py-2 rounded-lg text-sm text-white mt-2 hover:bg-blue-600">Publish</button>
        </div>

    </div>

    </div >
}