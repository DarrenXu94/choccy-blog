import React, { useState, useEffect } from 'react'
import { Blog } from '../../services/types'
import { StrapiAPI } from '../../services/StrapiAPI';
import BlogCard from "./BlogCard/BlogCard";

import "./Landing.scss";

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
        <div >
            <div className="heading" style={{ padding: "30px", fontSize: "40px", textAlign: "center" }}>
                Choccy ratings with Daz
            </div>
            <div className="card-container" style={{ width: "80%", margin: "auto" }}>

                {data?.map(e => {
                    return <BlogCard key={e._id} data={e}>{e.Title}</BlogCard>
                })}
            </div>
        </div>
    )
}
