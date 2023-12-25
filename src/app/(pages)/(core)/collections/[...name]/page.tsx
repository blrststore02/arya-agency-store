"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

interface Map {
    [key: string]: { imageUrl: string, title: string }
}

export default function Page({ params }: { params: { name: string } }) {
    const collections: Map = {
        men: {
            imageUrl: "/men.jpg",
            title: "men",
        },
        women: {
            imageUrl: "/women.jpg",
            title: "women",
        }
    }
    useEffect(() => {
    })

    return (
        <>
            <div className="relative flex flex-col w-full h-full px-4 py-3">
                <div className="flex w-full h-1/5">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-md ms-1 font-['Poppins'] leading-10 tracking-tight font-mediummd:ms-2  font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center leading-10 text-md ">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" className="ms-1 font-['Poppins'] leading-10 tracking-tight text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">Collections</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center leading-10 text-md ">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 leading-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 font-['Poppins'] leading-10 tracking-tight text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400 capitalize">{params.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="flex w-full h-2/5">
                    <div className="flex w-full gap-4 py-4">
                        <div className="flex w-full relative image-content__image-wrapper d-flex align-items-center collection-hero collection-hero-banner">
                            <img className="block absolute transform transition duration-500 scale-100 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                src={`${collections![params!.name as string].imageUrl}`}
                                data-aspectratio="0.7496251874062968"
                                alt={`${collections[params.name].title}`}
                                loading="lazy"
                                width="1000"
                                height="1334" />
                            {/* <div className="flex absolute left-0 top-0 items-center justify-center overflow-hidden flex-col z-50 w-full h-full m-auto">
                                <h1 className="text-4xl font-semibold text-white">
                                    <span className="overflow-hidden h-[1px] w-[1px] p-0 absolute clip">Collection: </span>Outerwear</h1>
                                <div className="text-lg font-normal text-white">
                                    <span className="">Embrace the beauty of the season with our curated autumn collection.</span>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}