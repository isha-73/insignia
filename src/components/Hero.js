import Button from "./ui/Button";

export default function Hero() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-[100vw] bg-[#F5EEE6] relative">
            <img src="/images/herosmall.png" alt="hero" className="hidden lg:block absolute ml-16 left-1/3 2xl:left-1/2 bottom-0 z-10" />
            <div className="hidden relative md:flex flex-col px-2 md:px-10 lg:px-20 h-full md:-mt-16 lg:-mt-28 justify-center items-start">
                <h1 className="text-[#151109] font-hb md:text-4xl lg:text-6xl font-bold mb-8">
                    THE CROWN<br />OF DADAR
                </h1>
                <p className="text-[#131313] font-medium text-base border-l-8 border-[#D8B25D] px-2 mb-8 lg:text-[18px] text-[14px] w-3/4">
                    Introducing a New Paradigm of Exquisite Living in Dadar: Unveiling the Epitome of Luxurious Residential Blis.
                </p>
                <Button>GET A QUOTE</Button>
            </div>
            <div className="flex md:justify-end justify-center w-full items-center">
                <img src="/images/herobig.png" alt="hero" className="w-[100vw] md:w-auto" />
                <div className="md:hidden absolute h-full flex flex-col px-8 justify-end items-center bg-[#000000aa] py-16">
                    <h1 className="text-[#D8B25D] font-hb font-bold text-4xl mb-8 text-center">
                        THE CROWN<br />OF DADAR
                    </h1>
                    <p className="text-white text-base px-2 mb-8 text-[14px] text-center">
                        Introducing a New Paradigm of Exquisite Living in Dadar: Unveiling the Epitome of Luxurious Residential Blis.
                    </p>
                    <Button>GET A QUOTE</Button>
                </div>
            </div>
        </div>

    )
}