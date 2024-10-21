import React from 'react'
import banner from '../../public/Banner.png'
function Banner() {
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px:4 flex flex-col md:flex-row my-10'>
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
                <div className=" space-y-12">
                    <h1 className='mx-3 text-3xl font-bold md:text-4xl font-bold  font-bold'>Hello, Welcome to <span className="text-pink-500">BOOK-SOULS</span></h1>
                    <p className='text-xl mx-2'>
                    Discover a world of books at your fingertips!
                    Whether you're hunting for the latest bestsellers, classic literature, or hidden indie gems, we’ve got something for every kind of reader...
                </p>
                </div>
                </div>
                <div className='order-1 w-full md:w-1/2'>
                <img src={banner} className='w-92 h-100'alt="books pic"/>
                </div>
            </div>
        </>
    )
}
export default Banner
