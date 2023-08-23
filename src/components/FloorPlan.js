export default function Floorplan() {
    return (
        <>
        <div className="flex flex-col justify-center items-center relative mt-20 px-6 md:px-10 lg:px-20">
            <h2 className="font-hb text-4xl text-center">
                FLOOR PLAN
            </h2>
            <img src="/images/sep.png" alt="sep" className="mx-auto mb-10" />
            
            {/* <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <img src="/images/1bhk.png" alt="1bhk" className="w-full" />
                    <p className="text-center font-hb text-3xl mt-4">1 BHK</p>
                </div>
                <div>
                    <img src="/images/2bhk.png" alt="2bhk" className="w-full" />
                    <p className="text-center font-hb text-3xl mt-4">2 BHK</p>
                </div>
                <div>
                    <img src="/images/3bhk.png" alt="3bhk" className="w-full" />
                    <p className="text-center font-hb text-3xl mt-4">3 BHK</p>
                </div>

            </div> */}
        </div>
        <img src="/images/floor.png" alt="sep" className="w-100" />
        </>
    )
}