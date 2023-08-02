export default function Map() {
    return (
        <div className="flex flex-col mt-2 md:px-10 lg:px-20">
            <h2 className="font-hl text-[18px] text-left md:text-3xl my-2 md:my-0 px-6 md:px-0">
                PROMINENT LANDMARKS THAT<br />BRING YOUR WORLD CLOSER
            </h2>
            <div className="flex flex-col md:flex-row mt-4 md:mt-10">
                <img src="/images/map.png" alt="map" className="md:w-3/5 md:mr-8" />
                <div className="flex flex-col w-full px-6 md:px-0 mt-6 md:mt-0">
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">SHOPPING</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">BANKS</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">THEATRES</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">EDUCATIONAL INSTITUTES</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">REGIONAL PLACES</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">HOTEL</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">HOSPITAL</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">NEARBY LANDMARKS</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                    <div className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full">
                        <p className="font-hl uppercase md:text-[18px] text-[13px]">CORPORATE AND BUSINESS HUB</p>
                        <img src="/images/down.svg" alt="arrow" className="w-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}