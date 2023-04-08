import React, { useState } from 'react';

const Sidecart = ({readTime}) => {
    console.log(readTime);
    return (
        <div>
            <div className='border-2 mb-4'>
                <h4 className='py-4 px-8 text-lg font-semibold'>Spent time on read: {readTime} min</h4>
            </div>
            <div  className='bg-gray-200'>
                <h3 className='py-4 px-8 text-lg font-semibold'>Bookmark Blogs: {}</h3>
            </div>
        </div>
    );
};

export default Sidecart;