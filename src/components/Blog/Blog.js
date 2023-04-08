import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = ({ blog , readTimeHandler}) => {
    const { image, authorName, publishDate, readTime, title } = blog

    
    return (
        <div>
            <div className='mb-20'>
                <div className=''><img className='rounded-xl' src={image.coverPage} alt="" /></div>
                <div className='flex justify-between items-center '>
                    <div className='flex '>
                        <div className='w-[50px] m-auto'><img src={image.authorImage} alt="" /></div>
                        <div className='text-left my-4'>
                            <h3>{authorName}</h3>
                            <p>{publishDate}</p>
                        </div>
                    </div>
                    <div>
                        <p>0{readTime} min read <button ><FontAwesomeIcon icon={faBookmark} /></button></p>
                    </div>


                </div>
                <div className='w-3/4 text-left'><h1 className='font-semibold text-3xl '>{title}</h1></div>
                <div className='text-left my-8 text-blue-500'><button onClick={() => readTimeHandler(readTime)}>Mark as read</button></div>
                <hr />

            </div>

        </div>
    );
};

export default Blog;