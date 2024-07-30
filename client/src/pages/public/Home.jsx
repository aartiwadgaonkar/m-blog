import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { URL } from '../../redux/api'
import { getBlog } from '../../redux/blog/blogAction'

export default function Home() {
    const { blogs } = useSelector(state => state.blog)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getBlog())
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">

                    {
                        blogs.map(item => <>
                            {/* {JSON.stringify(item.image)} */}
                            <BlogCard blog={item} />
                        </>)
                    }
                </div>
            </div>
        </div>

    )
}
const BlogCard = ({ blog }) => <div className="col-sm-4">

    <div className='card'>
        <img src={`${URL}/${blog.image}`} className='card-img-top img-fluid' alt="" />
        <div className="card-body">
            <p className='fs-1'>{blog.title}</p>
        </div>
    </div>
</div>
