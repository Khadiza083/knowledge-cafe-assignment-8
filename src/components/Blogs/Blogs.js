import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs}) => {
    // console.log(blogs);

    return (
        <div>
            {
                blogs.map(blog => <Blog 
                    blog = {blog}
                    key = {blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;