import React, { useState, useEffect } from 'react'
import { Blog } from '../../services/types'
import { StrapiAPI } from '../../services/StrapiAPI';
import BlogCard from "./BlogCard/BlogCard";

import "./Landing.scss";
import Loader from '../../components/Loader';

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
            <div className="heading" style={{
                padding: "30px",
                textAlign: "center",
                backgroundImage: `url(https://images.pexels.com/photos/2067420/pexels-photo-2067420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
                backgroundPosition: "center",


            }}>
                <h1>

                    Choccy ratings with Daz
                </h1>
            </div>
            <div className="card-container" style={{ width: "80%", margin: "auto" }}>

                {!data &&
                    <div style={{ justifyContent: "center", display: "flex", paddingTop: "20px" }}><Loader /></div>
                }

                {data?.map(e => {
                    return <BlogCard key={e._id} data={e}>{e.Title}</BlogCard>
                })}
            </div>
        </div>
    )
}
