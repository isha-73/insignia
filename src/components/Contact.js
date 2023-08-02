import Button from "./ui/Button";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center px-6 md:px-10 lg:px-20 mt-32 mb-20">
            <h2 className="font-hb text-2xl md:text-4xl text-center">WANT TO FEEL THE<br /><span className="text-[#D8B25D]">LUXURIOUS JOY?</span></h2>
            <div className="grid md:grid-cols-2 gap-4 w-full mt-10">
                <input type="text" placeholder="ADD YOUR NAME" className="border-b-2 border-[#131313] bg-transparent placeholder:text-[#131313] px-0 py-3 md:my-6 md:w-11/12" />
                <input type="text" placeholder="ADD YOUR E-MAIL" className="border-b-2 border-[#131313] bg-transparent placeholder:text-[#131313] px-0 py-3 md:my-6 md:w-11/12" />
                <input type="text" placeholder="ADD YOUR PHONE NO" className="border-b-2 border-[#131313] bg-transparent placeholder:text-[#131313] px-0 py-3 md:my-6 md:w-11/12" />
                <input type="text" placeholder="WRITE YOUR MESSAGE" className="border-b-2 border-[#131313] bg-transparent placeholder:text-[#131313] px-0 py-3 md:my-6 md:w-11/12" />
                <div className="grid md:grid-cols-2 gap-4 md:w-11/12 mt-6">
                    <Button>GET A QUOTE</Button>
                    <button className="text-[#131313] border-2 h-auto border-[#131313] py-3 px-10 font-semibold">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}