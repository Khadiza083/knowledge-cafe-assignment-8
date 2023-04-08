import React, { useEffect, useState } from 'react';

const Sidecart = ({readTime}) => {
    const [time, setTime] = useState(readTime)

    useEffect(()=>{
        const getReadTimeFromStorage = localStorage.getItem('readTime')
        setTime(getReadTimeFromStorage);
    },[readTime])
    return (
        <div>
            <div className='border-2 mb-4'>
                <h4 className='py-4 px-8 text-lg font-semibold'>Spent time on read: {time} min</h4>
            </div>
            <div  className='bg-gray-200'>
                <h3 className='py-4 px-8 text-lg font-semibold'>Bookmark Blogs: {}</h3>
            </div>
        </div>
    );
};

export default Sidecart;