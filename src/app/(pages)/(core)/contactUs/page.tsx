"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselInterface, CarouselItem, CarouselOptions } from "flowbite";

export default function ContactUs() {

    const [dimensions, setDimensions] = useState<any>(
        {
            width: window!.innerWidth,
            height: window!.innerHeight,
        }
    );

    const handleResize = () => {
        setDimensions({
            width: window!.innerWidth,
            height: window!.innerHeight,
        });
    }

    const onPageLoad = () => {
        window.addEventListener("resize", handleResize, false);
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

    useEffect(() => {
        onPageLoad();
    }, []);

    return (
        <>
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
            <section>
                
            </section>
        </>
    )
}