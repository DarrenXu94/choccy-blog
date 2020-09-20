import React from 'react'
import "./BlogCard.scss";
import { Blog } from '../../../services/types';
import { Link } from 'react-router-dom';
interface IProps {
    data: Blog,
    children: any
}
export default function BlogCard({ data, ...children }: IProps) {
    return (
        // <div className="center" style={{ padding: "30px" }}>
        //     <Link to={`/blog/${data._id}`}>

        //         <div className="property-card">
        //             <a href="#">
        //                 <div className="property-image" style={{ backgroundImage: `url(${data.MediaURL})` }}>
        //                     <div className="property-image-title">
        //                     </div>
        //                 </div>
        //             </a>
        //             <div className="property-description">
        //                 <h5> {data.Title} </h5>
        //                 <p>{data.Content}</p>
        //             </div>

        //         </div>
        //     </Link>
        // </div>
        <div className="padding-outer">
            <div className="padding-outer__div" style={{ display: "flex", backgroundColor: "white", width: "100%" }}>
                <div style={{ backgroundImage: `url(${data.MediaURL})` }} className="side-img">
                </div>
                <div style={{ flex: 4, paddingLeft: "10px", paddingTop: "10px" }} className="side-div">
                    <h5> {data.Title} </h5>
                    <p>{data.Content}</p>
                </div>
            </div>

        </div>
    )
}
