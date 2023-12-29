"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselInterface, CarouselItem, CarouselOptions } from "flowbite";

interface Map {
    [key: string]: { imageUrl: string, title: string }
}

export default function ourPartners() {

    const [dimensions, setDimensions] = useState<any>(
        {
            width: window!.innerWidth,
            height: window!.innerHeight,
        }
    );

    const collections: Map = {
        men: {
            imageUrl: "/men.jpg",
            title: "men",
        },
        women: {
            imageUrl: "/women.jpg",
            title: "women",
        },
        kids: {
            imageUrl: "/women.jpg",
            title: "women",
        },
        accesories: {
            imageUrl: "/women.jpg",
            title: "women",
        }
    }

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
                <div className="relative w-full">
                    <div className="relative w-full flex justify-center mx-auto content-center">
                        <div className="section-header pt-2 w-[90%] flex mx-auto justify-center content-center">
                            <h3 className="section-title-1 w-full mb-4 text-center text-2xl ms-1 font-['Poppins'] leading-10 flex justify-center mx-auto " data-aos="" data-aos-duration="500">
                                <span>Our Partners</span>
                            </h3>
                        </div>
                    </div>
                    <div className="mb-4 w-full flex justify-center border-gray-200 dark:border-gray-700">
                        <ul className="grid grid-cols-2 w-11/12 py-8 h-full md:grid-cols-5 gap-4 items-center justify-center flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded-[9999px] border-radius overflow-hidden">
                                    <div className="rounded-[9999px] overflow-hidden w-[222px] h-[222px]">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["men" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections["men"].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                    <div className="collection-card-1-infor">
                                        <h4 className="pt-2 m-0 ms-1 font-['Poppins'] leading-10 text-lg capitalize">
                                            <a className="decorat" href="/collections/men">
                                                Men
                                            </a>
                                        </h4>
                                        <p className="pb-0 m-0 txt-body-60 collection-count ms-1 font-['Poppins'] hidden leading-10">10 products
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded-[9999px] border-radius overflow-hidden">
                                    <div className="rounded-[9999px] overflow-hidden w-[222px] h-[222px]">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["women" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections["women"].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                    <div className="collection-card-1-infor">
                                        <h4 className="pt-2 m-0 ms-1 font-['Poppins'] leading-10 text-lg capitalize">
                                            <a className="decorat" href="/collections/men">
                                                women
                                            </a>
                                        </h4>
                                        <p className="pb-0 m-0 txt-body-60 collection-count ms-1 font-['Poppins'] hidden leading-10">10 products
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded-[9999px] border-radius overflow-hidden">
                                    <div className="rounded-[9999px] overflow-hidden w-[222px] h-[222px]">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["men" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections["men"].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                    <div className="collection-card-1-infor">
                                        <h4 className="pt-2 m-0 ms-1 font-['Poppins'] leading-10 text-lg capitalize">
                                            <a className="decorat" href="/collections/men">
                                                Men
                                            </a>
                                        </h4>
                                        <p className="pb-0 m-0 txt-body-60 collection-count ms-1 font-['Poppins'] hidden leading-10">10 products
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded-[9999px] border-radius overflow-hidden">
                                    <div className="rounded-[9999px] overflow-hidden w-[222px] h-[222px]">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["women" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections["women"].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                    <div className="collection-card-1-infor">
                                        <h4 className="pt-2 m-0 ms-1 font-['Poppins'] leading-10 text-lg capitalize">
                                            <a className="decorat" href="/collections/men">
                                                women
                                            </a>
                                        </h4>
                                        <p className="pb-0 m-0 txt-body-60 collection-count ms-1 font-['Poppins'] hidden leading-10">10 products
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded-[9999px] border-radius overflow-hidden">
                                    <div className="rounded-[9999px] overflow-hidden w-[222px] h-[222px]">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["women" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections["women"].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                    <div className="collection-card-1-infor">
                                        <h4 className="pt-2 m-0 ms-1 font-['Poppins'] leading-10 text-lg capitalize">
                                            <a className="decorat" href="/collections/men">
                                                women
                                            </a>
                                        </h4>
                                        <p className="pb-0 m-0 txt-body-60 collection-count ms-1 font-['Poppins'] hidden leading-10">10 products
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}