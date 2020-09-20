import React from 'react'
import "./BlogCard.scss";
import { Blog } from '../../../services/types';
interface IProps {
    data: Blog,
    children: any
}
export default function BlogCard({ data, ...children }: IProps) {
    return (
        <div className="center">
            <div className="property-card">
                <a href="#">
                    <div className="property-image" style={{ backgroundImage: `url(${data.MediaURL})` }}>
                        <div className="property-image-title">
                        </div>
                    </div>
                </a>
                <div className="property-description">
                    <h5> {data.Title} </h5>
                    <p>{data.Content}</p>
                </div>

            </div>
        </div>
    )
}
