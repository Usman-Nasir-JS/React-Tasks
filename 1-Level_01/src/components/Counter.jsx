import { useState } from 'react';

function Counter() {

    let [count, setCount] = useState(0);
    // console.log(useState(count));
    
    let [message, setMessage] = useState("");

    function increase() {
        setCount(count + 1);

        if (count === 9) {
            setMessage("🎉 You reached 10!")    
        }
        else{
            setMessage("😄")
        }

    }
  
    function decrease() {

        if (count === 0) {
            count = 0;
        }
        else{
          setCount(count - 1);
        }
        if (count === 11) {
            setMessage("🎉 You reached 10!")    
        }
        else{
            setMessage("😄")
        }
        if (count === 0 || count === 1) {
            setMessage("😌")
        }

    }

    function reset() {
        setCount(count = 0);

        if (count === 0 || count === 1) {
            setMessage("😌")
        }

    }


    return (
        <>
            <h1 className='bg-blue-500 text-white text-4xl sm:text-5xl text-center py-8'>Emoji Counter Game</h1>
    
            <p className='m-5 text-3xl text-center bg-black text-white p-7'>You Clicked: {count} {message}</p>
      
            <div className='md:flex md:justify-center flex-wrap grid grid-cols-1'>

                <button className='border border-b-blue-900 py-2 px-5 my-3 mx-10 text-2xl bg-blue-500 hover:bg-blue-500 hover:text-white' onClick={increase}>Increment!</button>

                <button className='border border-b-blue-900 py-2 px-5 my-3 mx-10 text-2xl bg-blue-500 hover:bg-blue-500 hover:text-white' onClick={decrease}>Decrement!</button>

                <button className='border border-b-blue-900 py-2 px-5 my-3 mx-10 text-2xl bg-blue-500 hover:bg-blue-500 hover:text-white' onClick={reset}>Reset!</button>

            </div>
        </>
    
    )

}

export default Counter
