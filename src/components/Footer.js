export default function Footer() {
    return (
        <div className="relative md:border-t-2 border-[#D8B25D] my-10 px-6 md:px-10 lg:px-20 pt-16">
            <img src="/images/logo.png" alt="logo" className="w-32 my-2 mx-32 md:mx-0 md:absolute md:left-24" />
            <h2 className="font-hb text-[55px] lg:text-[208px] text-[#D8B25D] relative text-center md:text-left">INSIGNIA
            <span className="font-hb text-[22px] lg:text-[80px] text-[#D8B25D] absolute top-2 lg:top-10">TM</span>
            </h2>
            <div className="grid md:grid-cols-4">
                <div className="mx-auto md:mx-0 border-b-2 border-[#131313] w-2/3 py-8 md:py-0 md:border-b-0">
                    <p className="font-medium text-center md:text-left">@2023 INSIGNEA </p>
                    <p className="font-medium text-center md:text-left">By PVV Infra</p>
                </div>
                <div className="mx-auto md:mx-0 border-b-2 border-[#131313] w-2/3 py-8 md:py-0 md:border-b-0">
                    <p className="font-medium text-center md:text-left">+91 789xx 789xx</p>
                    <p className="font-medium text-center md:text-left">Hellorealtors@23mail.com</p>
                </div>
                <div className="mx-auto md:mx-0 border-b-2 border-[#131313] w-2/3 py-8 md:py-0 md:border-b-0">
                    <p className="font-medium text-center md:text-left">LINKEDIN</p>
                    <p className="font-medium text-center md:text-left">INSTAGRAM</p>
                </div>
                <div className="pt-8 md:py-0">
                    <p className="font-medium text-center md:text-left">Privacy Policy</p>
                    <p className="font-medium text-center md:text-left">Terms and Conditions</p>
                </div>
            </div>
        </div>
    )
}