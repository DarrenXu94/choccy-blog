import React, { useState, useEffect } from 'react'
import { Blog } from '../../services/types'
import { StrapiAPI } from '../../services/StrapiAPI';
import BlogCard from "./BlogCard/BlogCard";

export default function Landing() {
    const [data, setdata] = useState<Blog[] | null>(null)
    useEffect(() => {
        getAllBlogs()
    }, []);

    const getAllBlogs = async () => {
        const api = new StrapiAPI()
        const blogs = await api.getBlogs()
        console.log(blogs)
        setdata(blogs)
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {data?.map(e => {
                return <BlogCard key={e._id} data={e}>{e.Title}</BlogCard>
            })}
        </div>
    )
}
