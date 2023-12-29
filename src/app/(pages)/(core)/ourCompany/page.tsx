"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselInterface, CarouselItem, CarouselOptions } from "flowbite";

interface Map {
    [key: string]: { imageUrl: string, title: string }
}

export default function OurComany() {

    // const [dimensions, setDimensions] = useState<any>(
    //     {
    //         width: window!.innerWidth,
    //         height: window!.innerHeight,
    //     }
    // );

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
                // const position = $event!._activeItem!.position > 0 ? "table" : "calender";
                // if ($event!._activeItem!.position > 0) {
                //     setPageNum(0);
                //     loadAllNumbers();
                // }
                // router.push(`${pathName}?view=${position}`);
            },
        };
        const carousel: CarouselInterface | null = (new Carousel(items, options)) || null;

        carousel.cycle();

        // set event listeners for prev and next buttons
        // const $prevButton = document.getElementById('data-carousel-prev')!;
        // const $nextButton = document.getElementById('data-carousel-next')!;

        // $prevButton.addEventListener('click', () => {
        //     carousel.prev();
        // });

        // $nextButton.addEventListener('click', () => {
        //     carousel.next();
        // });
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
                    {/* <button type="button" id="data-carousel-prev" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" id="data-carousel-next" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button> */}
                </div>
                <div className="relative w-full mt-6">
                    <div className="relative w-full justify-center mx-auto content-center">
                        <div className="section-header pt-10 w-[90%]  mx-auto justify-center content-center">
                            <h3 className="section-title-1 text-2xl ms-1 mb-4 font-['Poppins'] leading-10 flex justify-center" data-aos="" data-aos-duration="500">
                                <span>Shop By Categories</span>
                            </h3>
                        </div>
                    </div>
                    <div className="mb-4 w-full flex justify-center border-gray-200 dark:border-gray-700">
                        <ul className="grid grid-cols-2 w-[80%] py-8 h-full md:grid-cols-4 gap-8 items-center justify-center flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
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
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
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
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
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
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
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