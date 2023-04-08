import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs, readTimeHandler, bookmarkedBlog, quantity}) => {
    // console.log(blogs);

    return (
        <div>
            {
                blogs.map(blog => <Blog 
                    blog = {blog}
                    key = {blog.id}
                    readTimeHandler ={readTimeHandler}
                    bookmarkedBlog ={bookmarkedBlog}
                    quantity = {quantity}></Blog>)
            }
        </div>
    );
};

export default Blogs;