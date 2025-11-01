import axios from "axios";
import { useEffect, useState } from "react"


interface BlogType {
    content: string,
    title: string,
    id: string,
    author: {
        name: string
    }
}


export const useBlogs = ({ id }: { id: string }) => {
    const [blog, setBlog] = useState<BlogType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8787/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((responce) => {
                setBlog(responce.data.blogs)
                setLoading(false)
            })
    }, [id])



    return {
        blog,
        loading
    }
}

export const useBlog = () => {

    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8787/api/v1/blog/bulk/', {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((responce) => {
                setBlogs(responce.data.blogs)
                setLoading(false)
            })
    }, [])



    return {
        blogs,
        loading
    }
}