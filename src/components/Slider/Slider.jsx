import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import './Slider.css';

const CustomSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        className: "w-full h-full",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 1500,
        fade: true,
        slidesToScroll: 1,
        adaptiveHeight: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        }
    };

    const textVariants = {
        initial: {
            opacity: 0,
            y: -20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    const textVariantstwo = {
        initial: {
            opacity: 0,
            x: -20,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    const textVariantThree = {
        initial: {
            opacity: 0,
            x: 20,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.4,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    const textVariantFour = {
        initial: {
            opacity: 0,
            y: 20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };
    return (
        <div className='max-w-[1600px]'>
            <Slider {...settings}>
                <div className='bg-cover bg-center bg-no-repeat bg-fixed bg'>
                    {/* <div className='h-full text-center flex items-center justify-center flex-col'>
                        <motion.p
                            variants={textVariants}
                            initial="initial"
                            animate={currentSlide === 0 ? "animate" : "initial"}
                            className='text-gray-900 text-pretty drop-shadow-lg uppercase font-medium mb-3 text-3xl'
                        >
                            Discount 50% Off
                        </motion.p>
                        <motion.h1
                            variants={textVariantFour}
                            initial="initial"
                            animate={currentSlide === 0 ? "animate" : "initial"}
                            className='text-slate-900 text-pretty uppercase drop-shadow-2xl font-bold mt-2 text-6xl'
                        >
                            Kids Deals 2024
                        </motion.h1>
                        <div>
                            <button className='btn-views'>View Collection</button>
                        </div>
                    </div> */}
                </div>
                <div className='bg-cover bg-center bg-no-repeat bgs bg-fixed'>
                    {/* <div className='h-full text-center flex items-center justify-center flex-col'>
                        <motion.p
                            variants={textVariantstwo}
                            initial="initial"
                            animate={currentSlide === 1 ? "animate" : "initial"}
                            className='text-black text-pretty drop-shadow-lg uppercase font-medium mb-3 text-3xl'
                        >
                            Discount 40% Off
                        </motion.p>
                        <motion.h1
                            variants={textVariantThree}
                            initial="initial"
                            animate={currentSlide === 1 ? "animate" : "initial"}
                            className='text-slate-900 text-pretty uppercase drop-shadow-2xl font-bold mt-2 text-6xl'
                        >
                            New Arrivals 2024
                        </motion.h1>
                        <div>
                            <button className='btn-views'>View Shop</button>
                        </div>
                    </div> */}
                </div>
            </Slider>
        </div>
    );
};

export default CustomSlider;
