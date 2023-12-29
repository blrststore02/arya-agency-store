import Link from "next/link"

export const AAHeader = () => {
    return (
        <div className="sticky top-0 z-[999999] flex flex-row bg-white border-b border-stone-800 border-opacity-20">
            <div className="logo w-1/4 flex">
                <div className=" bg-rose-600 rounded-tr rounded-br justify-center items-center inline-flex">
                    <img className="relative" src="/logo.png" />
                </div>
            </div>
            <div className="flex flex-col w-2/3 content-center justify-center">
                <nav className="navigation-panel flex justify-end py-1">
                    <ul className="whitespace-nowrap flex items-start justify-center">
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">
                            <Link href="/storeLocator">Store Locator</Link></li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">
                            <Link href="/callus">1800 222 001</Link></li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">
                            <Link href="/contactUs">Contact Us</Link></li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">
                            <Link href="/career">Career</Link></li>
                    </ul>
                </nav>
                <nav className="navigation-panel flex justify-end py-1">
                    <ul className="whitespace-nowrap flex items-start justify-center">
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">
                            <Link href="/ourCompany">Our Company</Link>
                        </li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">
                            <Link href={`/collections/men`}>Lifestyle</Link>
                        </li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">
                            <Link href="/galary">Galary</Link>
                        </li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">
                            <Link href="/ourPartners">Our Partners</Link>
                        </li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">
                            <Link href="/newsroom">Newsroom</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 