import React, { useEffect, useState } from 'react'
import { match } from "react-router-dom";

import { StrapiAPI } from "../../services/StrapiAPI";
import { Blog } from '../../services/types';

export interface RouteParams { id: string }

export default function BlogItem({ match }: { match: match<RouteParams> }) {

    useEffect(() => {
        getBlog()
    }, []);

    const [data, setdata] = useState<Blog | null>(null)

    const getBlog = async () => {
        const api = new StrapiAPI()
        const blog = await api.getBlog(match.params.id)
        setdata(blog)
    }

    return (
        <div>
            Blog {match.params.id}
            {data?.Title}
        </div>
    )
}
