import React from 'react';

const Contact = () => {

    

    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 pt-12 md:pt-0 text-white'>
            <div className='flex flex-col pt-12 md:pt-0 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 pt-24 md:pt-0'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/e3366a56-fa56-4df9-aa2c-6bd57a562116" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name="email" placeholder='Enter your email' className='p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none' />
                        <textarea rows={6} name="message" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact