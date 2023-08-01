export default function About() {
    return (
        <div className="flex flex-col md:flex-row bg-[#F5EEE6]">
            <img src="/images/about1.png" alt="about 1" className="md:block hidden" />
            
            <div className="grow flex flex-col justify-center px-6 md:px-12">
                <h2 className="font-hb text-[24px] md:text-[40px] relative my-8 md:my-12">
                    ABOUT INSIGNIA
                    <span className="font-hb text-[#D8B25D] text-lg md:text-2xl absolute md:top-2">TM</span>
                </h2>
                <p className="text-[14px] md:text-[18px] mb-8 md:mb-12">
                Insignia Luxury Apartments, an exquisite real estate project located in the prestigious neighborhood of Dadar. Developed by PVV Infra, Insignia offers a unique combination of luxury, premium amenities, and breathtaking sea views.
                </p>
                <p className="text-[14px] md:text-[18px] mb-8 md:mb-12">
                At Insignia Luxury Apartments, we strive to redefine the standards of opulence, comfort, and elegance in the prestigious neighborhood of Dadar. Developed by PVV Infra, our mission is to provide an exceptional living experience that transcends the ordinary, offering residents a sanctuary of unparalleled luxury.
                </p>
            </div>
            <img src="/images/about2.png" alt="about 2" className="md:block hidden" />
            <div className="grid grid-cols-2">
                <img src="/images/about1.png" alt="about 1" className="md:hidden h-full" />
                <img src="/images/about2.png" alt="about 2" className="md:hidden h-full" />
            </div>
        </div>
    )
}