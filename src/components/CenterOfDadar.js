export default function CenterOfDadar() {
    return (
        <div className="flex flex-col mt-10 md:px-10 lg:px-20">
            <div className="flex md:flex-row flex-col justify-between px-6 md:px-0">
                <h2 className="font-hb text-2xl text-center md:text-left md:text-3xl my-4 md:my-0">
                <span className="text-[#D8B25D]">LOCATION</span>
                {` `}THAT MAKES US <br className="hidden md:block"/>CENTER OF DADAR
                </h2>
                <p className="text-[14px] md:text-[18px] md:w-1/2 flex justify-end text-center md:text-left">
                Welcome to INSIGNIA , an exquisite and visionary real <br className="hidden md:block"/>estate project nestled in the vibrant heart of Dadar, <br className="hidden md:block"/>Mumbai. We are dedicated to offering a refined, 
                </p>
            </div>
            <img src="/images/centerOfDadar.png" alt="centerOfDadar" className="mx-auto mt-6 md:mt-16 mb-2 md:mb-16" />
        </div>
    )
}