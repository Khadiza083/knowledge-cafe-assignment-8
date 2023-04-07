import React from 'react';
import siteLogo from "./../../images/user-1.png"
const Menubar = () => {
    return (
        <div>
            <div className='flex justify-around m-5 items-center border-b-2'>
                <h2 className='font-semibold text-2xl'>AfraTech Solutions</h2>
                <ul className='flex justify-between items-center gap-5'>
                    <li><a href="\Home">Home</a></li>
                    <li><a href="\About">About</a></li>
                    <li><a href="\Blog">Blog</a></li>
                    <div className='w-[40px]'>
                        <img src={siteLogo} alt="" />
                    </div>
                </ul>
                
            </div>
            
        </div>

    );
};

export default Menubar;