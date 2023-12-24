export const AAHeader = () => {
    return (
        <div className="relative flex flex-row bg-white border-b border-stone-800 border-opacity-20">
            <div className="logo w-1/4 flex">
                <div className=" bg-rose-600 rounded-tr rounded-br justify-center items-center inline-flex">
                    <img className="relative" src="/logo.png" />
                </div>
            </div>
            <div className="flex flex-col w-2/3 content-center justify-center">
                <nav className="navigation-panel flex justify-end py-1">
                    <ul className="whitespace-nowrap flex items-start justify-center">
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">Store Locator</li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">1800 222 001</li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">partner with us</li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">Contact Us</li>
                        <li className="opacity-80 text-stone-800 px-4 text-sm font-normal font-['Poppins'] capitalize leading-[27px]">Career</li>
                    </ul>
                </nav>
                <nav className="navigation-panel flex justify-end py-1">
                    <ul className="whitespace-nowrap flex items-start justify-center">
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">Our Businesses</li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">Our Company</li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">Beyond Business</li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">Investors</li>
                        <li className=" text-stone-800 text-md px-4 font-normal font-['Poppins'] capitalize leading-[29.25px]">Newsroom</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} 