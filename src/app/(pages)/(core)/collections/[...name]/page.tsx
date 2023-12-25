"use client";
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
                                <a href="#" className="inline-flex items-center text-md ms-1 font-['Poppins'] leading-10 tracking-tight font-mediummd:ms-2  font-normal text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                                    <a href="#" className="ms-1 font-['Poppins'] leading-10 tracking-tight text-md font-normal text-gray-500 md:ms-2 dark:text-gray-400">Collections</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center leading-10 text-md ">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1 leading-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 font-['Poppins'] leading-10 tracking-tight text-md font-normal text-gray-500 md:ms-2 dark:text-gray-400 capitalize">{params.name}</span>
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
                            <div className="flex absolute left-0 top-0 items-center justify-center overflow-hidden flex-col z-[500] w-full h-full m-auto">
                                <h1 className="text-4xl font-semibold text-white capitalize py-2 font-['Poppins']">
                                    <span className="overflow-hidden h-[1px] w-[1px] p-0 absolute clip">Collection: </span>Outerwear</h1>
                                <div className="text-lg font-normal text-white font-['Poppins']">
                                    <span className="">Embrace the beauty of the season with our curated autumn collection.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col h-2/5">
                    <div className="mb-4 border-b w-full border-gray-200 dark:border-gray-700">
                        <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2 pb-4" role="presentation">
                                <button className="inline-block px-6 py-2 font-['Poppins'] border-b-2 font-normal rounded-t-lg" id="men-tab" data-tabs-target="#men" type="button" role="tab" aria-controls="men" aria-selected="false">Men (10)</button>
                            </li>
                            <li className="me-2 pb-4" role="presentation">
                                <button className="inline-block px-6 py-2 font-['Poppins'] border-b-2 rounded-t-lg font-normal hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="woman-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Women (10)</button>
                            </li>
                            <li className="me-2 pb-4" role="presentation">
                                <button className="inline-block px-6 py-2 font-['Poppins'] border-b-2 rounded-t-lg font-normal hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="kids-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Kids (10)</button>
                            </li>
                            <li role="presentation" className="pb-4">
                                <button className="inline-block px-6 py-2 font-['Poppins'] border-b-2 rounded-t-lg font-normal hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="accessories-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Accessories (10)</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content w-full">
                        {/* <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="men" role="tabpanel" aria-labelledby="men-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Men tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="woman" role="tabpanel" aria-labelledby="woman-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Woman tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="kids" role="tabpanel" aria-labelledby="kids-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Kids tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="accessories" role="tabpanel" aria-labelledby="accessories-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Accessories tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div> */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}