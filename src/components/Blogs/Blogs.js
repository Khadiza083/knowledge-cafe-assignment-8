import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs, readTimeHandler}) => {
    // console.log(blogs);

    return (
        <div>
            {
                blogs.map(blog => <Blog 
                    blog = {blog}
                    key = {blog.id}
                    readTimeHandler ={readTimeHandler}></Blog>)
            }
        </div>
    );
};

export default Blogs;