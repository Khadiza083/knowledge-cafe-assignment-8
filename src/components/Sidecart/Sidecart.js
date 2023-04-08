import React, { useEffect, useState } from 'react';

const Sidecart = ({ readTime, quantity, nameTitle }) => {

    const blogNames = nameTitle.map(singleTitle => (singleTitle.title));
    const [time, setTime] = useState(readTime)

    useEffect(() => {
        const getReadTimeFromStorage = localStorage.getItem('readTime')
        setTime(getReadTimeFromStorage);
    }, [readTime])
    return (
        <div>
            <div className='border-2 mb-4'>
                <h4 className='py-4 px-8 text-lg font-semibold'>Spent time on read: {time} min</h4>
            </div>
            <div className='bg-gray-200 p-2'>
                <h3 className='py-4 px-8 text-lg font-semibold'>Bookmark Blogs: {quantity}</h3>

                <ul className=' '>
                    {blogNames.map((blogLoad, idx) => <li className='bg-white m-4 p-6' key={idx}>{blogLoad}</li>)}
                </ul>



            </div>

        </div >
    );
};

export default Sidecart;