"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselInterface, CarouselItem, CarouselOptions } from "flowbite";

export default function ContactUs() {

    
    useEffect(() => {
        onPageLoad();
    }, []);

    // const [dimensions, setDimensions] = useState<any>(
    //     {
    //         width: window!.innerWidth,
    //         height: window!.innerHeight,
    //     }
    // );

    // const handleResize = () => {
    //     setDimensions({
    //         width: window!.innerWidth,
    //         height: window!.innerHeight,
    //     });
    // }

    const onPageLoad = () => {
        // window.addEventListener("resize", handleResize, false);
        const items: CarouselItem[] = [
            {
                position: 0,
                el: document!.querySelector('#carousel-item-1')!,
            },
            {
                position: 1,
                el: document!.querySelector('#carousel-item-2')!,
            },
            {
                position: 2,
                el: document!.querySelector('#carousel-item-3')!,
            },
            {
                position: 3,
                el: document!.querySelector('#carousel-item-4')!,
            },
            {
                position: 4,
                el: document!.querySelector('#carousel-item-5')!,
            }
        ];
        const options: CarouselOptions = {
            defaultPosition: 0,
            interval: 3000,
            indicators: {
                activeClasses: 'bg-[#0092f4]',
                inactiveClasses:
                    'bg-[#c2e6ff] hover:bg-[#4db7ff] dark:bg-gray-800/50 dark:hover:bg-gray-800',
                items: [
                    {
                        position: 0,
                        el: document!.getElementById('carousel-indicator-1')!,
                    },
                    {
                        position: 1,
                        el: document!.getElementById('carousel-indicator-2')!,
                    },
                    {
                        position: 2,
                        el: document!.getElementById('carousel-indicator-3')!,
                    },
                    {
                        position: 3,
                        el: document!.getElementById('carousel-indicator-4')!,
                    },
                    {
                        position: 4,
                        el: document!.getElementById('carousel-indicator-5')!,
                    }
                ],
            },
            onChange: ($event) => {
            },
        };
        const carousel: CarouselInterface | null = (new Carousel(items, options)) || null;

        carousel.cycle();
    }

    return (
        <>
            <section className="w-full h-full bg-white">
                <section className="w-full h-full bg-white">
                    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                        <div className="relative min-h-carsouel overflow-hidden rounded-none md:h-96">
                            <div id="carousel-item-1" className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src="/banner-1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-2" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-3" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-4" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <div id="carousel-item-5" className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/banner-5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        </div>
                        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                            <button id="carousel-indicator-1" type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button id="carousel-indicator-2" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button id="carousel-indicator-3" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button id="carousel-indicator-4" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button id="carousel-indicator-5" type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                    </div>
                </section>
                <section className="w-full h-full flex px-6 py-16">
                    <div className="p-6 w-11/12 justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  mx-auto">
                        <div className="flex w-full flex-row gap-16 justify-evenly">
                            <div className="w-full">
                                <h1 className="text-lg mb-6 w-full flex mx-auto items-start text-start justify-start font-semibold">
                                    <span className="overflow-hidden p-0 clip"></span>Send Us an Email</h1>
                                <form className="mb-6">
                                    <div className="flex w-full flex-row gap-6">
                                        <div className="mb-6 w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                            <input type="email" id="email" className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="name" required />
                                        </div>
                                        <div className="mb-6 w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                            <input type="email" id="email" className="bg-neutral-100  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="name@company.com" required />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                        <input type="text" id="phone" className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 " placeholder="Phone Number" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                        <input type="text" id="subject" className="bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                        <textarea id="message" rows={4} className="block bg-neutral-100  p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Your message..."></textarea>
                                    </div>
                                    <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 w-full focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 block">Send message</button>
                                </form>
                            </div>
                            <div className="w-full">
                                <h1 className="text-lg mb-6 w-full uppercase flex mx-auto items-center text-start justify-start font-semibold">
                                    <span className="overflow-hidden p-0 clip uppercase"></span>About our shop</h1>
                                <div className="text-md mb-6 font-normal justify-normal">
                                    <span className="">Home to hundreds of products that can make life easier after a loss of sight, Shop CNIB is a retail enterprise created by the charity Canadian National Institute for the Blind (CNIB).</span>
                                </div>
                                <div className="flex w-full flex-row gap-6">
                                    <div className="mb-6 w-full">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    </div>
                                    <div className="mb-6 w-full">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}