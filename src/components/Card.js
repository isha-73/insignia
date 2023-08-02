import Button from "./ui/Button"

export default function Card() {
    return (
        <>
            <div className="md:block hidden">
                <div className="relative">
                    <div className="bg-[#2f2f2f] w-1/2 px-8 absolute bottom-10 left-28 z-0 card1">
                        <div className="bg-[#D8B25D] w-6 h-full -left-6 absolute z-10"></div>
                        <h3 className="font-hb text-white my-6 text-3xl w-3/4"><span className="text-[#D8B25D]">BUILD</span> UPON THE PUREST EMOTION OF JOY</h3>
                        <p className="text-base text-[#f5f5f5] mb-6 w-3/4">Harmony of Happiness - Delight in the Richness of Your New Home as You Experience Unparalleled Comfort and Opulence in Our Real Estate Haven</p>
                        <button className="text-[#f5f5f5] border border-[#f5f5f5] mb-6 py-3 px-10">
                            Download Brochure
                        </button>
                    </div>
                    <div className="flex justify-end px-6 md:px-20 py-6 md:pt-20 md:pb-10">
                        <img src="/images/card1.png" alt="card" />
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-[#2f2f2f] w-1/2 px-8 pb-8 absolute bottom-20 right-28 z-0 pl-32 card2">
                        <div className="bg-[#D8B25D] w-6 h-full -right-6 absolute z-10"></div>
                        <h3 className="font-hb text-white my-6 text-3xl ">LIVE ALL THE ELEMENTS THAT MAKE UP <span className="text-[#D8B25D]">A RICH LIFE</span></h3>
                        <p className="text-base text-[#f5f5f5] mb-6 ">A Canvas for Your Dreams - Unveil All the Facets of a Rich Life as You Step into Our Unrivaled Real Estate Masterpiece, Crafted for Your Ultimate Pleasure and Fulfillment</p>
                        <Button>
                            GET A QUOTE
                        </Button>
                    </div>
                    <div className="flex justify-start px-6 md:px-20 py-6 md:pb-20 md:pt-10">
                        <img src="/images/card2.png" alt="card" />
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="pt-20 pb-10 flex flex-col justify-center items-center">
                    <img src="/images/card1.png" alt="card" />
                    <h3 className="font-hb text-[#131313] my-6 text-2xl text-center px-6"><span className="text-[#D8B25D]">BUILD</span> UPON THE PUREST EMOTION OF JOY</h3>
                    <p className="text-base text-[#131313] mb-6 text-center px-6">Harmony of Happiness - Delight in the Richness of Your New Home as You Experience Unparalleled Comfort and Opulence in Our Real Estate Haven</p>
                    <button className="text-[#131313] border-2 border-[$131313] mb-6 py-3 px-10">
                        Download Brochure
                    </button>
                </div>
                <div className="pt-10 pb-20 flex flex-col justify-center items-center">
                    <img src="/images/card2.png" alt="card" />
                    <h3 className="font-hb text-[#131313] my-6 text-2xl text-center px-6">LIVE ALL THE ELEMENTS THAT MAKE UP <span className="text-[#D8B25D]">A RICH LIFE</span></h3>
                    <p className="text-base text-[#131313] mb-6 text-center px-6">A Canvas for Your Dreams - Unveil All the Facets of a Rich Life as You Step into Our Unrivaled Real Estate Masterpiece, Crafted for Your Ultimate Pleasure and Fulfillment</p>
                    <Button>
                        GET A QUOTE
                    </Button>
                </div>
            </div>
        </>
    )
}