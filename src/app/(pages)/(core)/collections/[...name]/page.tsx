"use client";

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
    return (
        <>
            <div className="relative flex flex-col w-full h-full px-4 py-3">
                <div className="flex w-full h-1/5">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-md ms-1 font-['Poppins'] leading-10 tracking-tight font-mediummd:ms-2  font-normal text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white">
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
                    <div className="mb-4 border-b w-full flex justify-center border-gray-200 dark:border-gray-700">
                        <ul className="grid grid-cols-2 w-[70%] py-8 h-full md:grid-cols-4 gap-6 items-center justify-center flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                            <li className="me-2 pb-4  flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["men" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections[params.name].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["women" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections[params.name].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["men" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections[params.name].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                </div>
                            </li>
                            <li className="me-2 pb-4 flex justify-center items-center gap-2 w-full h-full" role="presentation">
                                <div className="rounded w-[258px] overflow-hidden">
                                    <div className="rounded overflow-hidden">
                                        <img className="flex transform transition duration-500 scale-100 overflow-hidden relative mx-auto my-0 hover:scale-110 left-0 top-0 h-full w-full z-10 object-cover object-center image-content__image scale-in lazyautosizes lazyloaded"
                                            src={`${collections!["women" as string].imageUrl}`}
                                            data-aspectratio="0.7496251874062968"
                                            alt={`${collections[params.name].title}`}
                                            loading="lazy"
                                            width="1000"
                                            height="1334" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="default-tab-content w-full flex justify-center items-center">
                        <div className="group-button-container w-full pt-1 pb-4 flex justify-between mx-auto items-center">
                            <div className="group-button-container w-full flex justify-between  mx-auto items-center">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="inline-flex items-center px-4 py-2 pr-6 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-2 focus:ring-neutral-400 focus:text-neutral-400 dark:bg-neutral-400 dark:border-neutral-400 dark:text-white dark:hover:text-white dark:hover:bg-neutral-400 dark:focus:ring-neutral-400 dark:focus:text-white">
                                        <span className="w-4 h-4 pr-2 relative before:bg-[rgba(34,34,34,0.2)] before:shadow-[6px_0px_rgba(34,34,34,0.2)] before:absolute before:w-[2px] before:h-4 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:translate[calc(-50%-3px)]"></span>
                                    </button>
                                    <button type="button" className="inline-flex items-center px-4 py-2 pr-6 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 border-r-0 border-l-0 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-2 focus:ring-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:hover:text-white dark:hover:bg-neutral-600 dark:focus:ring-neutral-500 dark:focus:text-white">
                                        <span className="w-6 h-4 relative pr-2 before:bg-[rgba(34,34,34,0.2)] before:shadow-[6px_0px_rgba(34,34,34,0.2),12px_0px_rgba(34,34,34,0.2)] before:absolute before:w-[2px] before:h-4 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:translate[calc(-50%-3px)]"></span>
                                    </button>
                                    <button type="button" className="inline-flex items-center px-4 py-2 pl-1 text-sm font-medium text-gray-900 bg-white border border-neutral-300 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:text-white">
                                        <span className="w-10 h-4 relative pr- before:bg-[rgba(34,34,34,0.2)] before:shadow-[6px_0px_rgba(34,34,34,0.2),12px_0px_rgba(34,34,34,0.2),18px_0px_rgba(34,34,34,0.2)] before:absolute before:w-[2px] before:h-4 before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:translate[calc(-50%-3px)]"></span>
                                    </button>
                                </div>
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-2 focus:ring-neutral-700 focus:text-neutral-700 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:hover:text-white dark:hover:bg-neutral-600 dark:focus:ring-neutral-500 dark:focus:text-white">
                                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:text-white">
                                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                                        </svg>
                                    </button>
                                    <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-700 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:text-white">
                                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
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