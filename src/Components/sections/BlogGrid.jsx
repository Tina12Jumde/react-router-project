import React from 'react'
import { Link } from "react-router-dom"

const BlogGrid = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Link to="/blog/html in web dev." className='btn btn-primary'>View Blog 1</Link></div>
                    <div className="col">
                        <Link to="/blog/css in web dev." className='btn btn-secondary'>View Blog 2</Link></div>
                    <div className="col">
                        <Link to="/blog/js in web dev." className='btn btn-success'>View Blog 3</Link></div>
                    <div className="col">
                        <Link to="/blog/bootstrap in web dev." className='btn btn-info'>View Blog 4</Link></div>
                </div>
            </div>
        </>
    )
}

export default BlogGrid