import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Sample images for the carousel
const carouselImages = [
    `/images/book12.jpg`,
    `/images/book7.jpg`,
    `/images/book15.jpg`,
    `/images/book14.jpg`,
    `/images/book17.jpg`,
    `/images/book16.jpg`
];

const AboutUs = () => {
    return (
        <div className="container mx-auto max-w-4xl text-gray-800">
            {/* Carousel Section */}
            <div className="mb-8">
                <Carousel 
                    infinite 
                    autoPlay 
                    autoPlaySpeed={3000} 
                    showDots={true}
                    responsive={{
                        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
                        desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
                        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
                        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
                    }}
                >
                    {carouselImages.map((img, index) => (
                        <img key={index} src={img} alt={`Book ${index + 1}`} className="w-full h-[500px] object-cover rounded-lg" />
                    ))}
                </Carousel>
            </div>

            {/* Content Sections */}
            <section className="flex flex-col md:flex-row items-center p-8 bg-blue-50 rounded-lg shadow-md mb-5">
                <div className="ml-5 md:w-1/2 md:pr-8">
                    <h1 className="text-3xl font-bold text-blue-700 mb-2">Welcome to BOOKSOULS</h1>
                    <h2 className="text-2xl text-blue-600 mb-4">Where Stories Come Alive!</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">At BOOKSOULS, we believe that books are not just pages bound together—they are windows to new worlds, sources of inspiration, and keys to personal growth. Whether you’re curled up with a classic novel, exploring a new genre, or diving into an enlightening non-fiction book, our mission is to connect you with the power and magic of reading.</p>
                </div>
                <img src="/images/book10.jpg" alt="Bookshelf" className="w-full md:w-1/2 rounded-lg shadow-lg" />
            </section>

            <section className="flex flex-col md:flex-row-reverse items-center p-8 bg-pink-50 rounded-lg shadow-md mb-5">
                <img src="/images/book7.jpg" alt="Stack of Books" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className="ml-6 md:w-1/2 md:pr-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">BOOKSOULS was born out of a simple idea: to create a community of book lovers who share a passion for discovering great reads. In 2024, we set out to build a space that offers quality books, thoughtful recommendations, and an ever-growing collection that caters to readers of all types.</p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center p-8 bg-green-50 rounded-lg shadow-md mb-5">
                <div className="ml-6 md:w-1/2 md:pr-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">What We Offer</h2>
                    <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-5">
                        <li><strong>Curated Selections for Every Reader</strong>: We handpick the best books for all genres and tastes.</li>
                        <li><strong>Book Recommendations for All Ages</strong>: We offer personalized recommendations based on your interests.</li>
                        <li><strong>Easy Shopping, Secure Checkout</strong>: Browse our collection, read reviews, and make secure purchases.</li>
                    </ul>
                </div>
                <img src="/images/book6.jpg" alt="Book Selection" className="w-full md:w-1/2 rounded-lg shadow-lg" />
            </section>

            <section className="flex flex-col md:flex-row-reverse items-center p-8 bg-indigo-50 rounded-lg shadow-md mb-5">
                <img src="/images/book12.jpg" alt="Person Reading" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className=" ml-6 md:w-1/2 md:pr-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h2>
                    <h3 className="text-xl text-blue-600 mb-4">To Share the Joy of Reading</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">We’re a community of passionate readers who believe in the power of books to change the world. Our mission is to make reading accessible, enjoyable, and exciting for everyone.</p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center p-8 bg-blue-100 rounded-lg shadow-md mb-5">
                <img src="/images/book13.jpg" alt="Person Reading" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className="ml-6 md:w-1/2 md:pr-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Get In Touch</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">We love hearing from our readers! Feel free to reach out to us at booksouls.2024@gmail.com or connect with us on social media at "book_souls".</p>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center p-8 bg-teal-100 rounded-lg shadow-md mb-5">
                <img src="/images/book14.jpg" alt="Thank You" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className="ml-6 md:w-1/2 md:pr-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">Thank You for Joining Our Bookish Family!</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">At BOOKSOULS, we are driven by our love for literature, and we are so glad to have you on this journey with us. Thank you for being a part of our community, and happy reading!</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
