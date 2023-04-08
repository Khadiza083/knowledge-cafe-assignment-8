import React from 'react';


const Question = () => {
    return (
        <div className='question'>
            <h1>What is different props and state </h1>
            <p>Props : Props are immutable props pass array,object,function others props are like function parameter.
                
            </p>

            <p>State : state can be change , state is like variable declared in the function body, state is manage component</p>

            <h1>How dose work useState</h1>
            <p>UseState :  useState hook is a special function that takes the initial state as an argument and returns an array useState track of strings, numbers, booleans, arrays, objects.</p>

            <h1>What is Work useEffect</h1>
            <p>useEffect: useEffect useing to live filtering, trigger animation on new array value</p>
            
            <h1>How dose react Work</h1>
            <p>React: React is a JavaScript-based UI development library its doing work component,props,state Makes use of the JavaScript structure known as virtual DOM. 
                Since JavaScript's virtual DOM is quicker than the conventional DOM, 
                this will boost the speed of programs.Can be used with various systems and on both client and server sides is commendable. </p>
        </div>
    );
};

export default Question;