export default function Behind() {
    return (
        <div className="grid md:grid-cols-2 gap-4 px-6 md:px-10 lg:px-20 mt-20 md:mt-48 my-10 md:mb-32">
            <div className="flex flex-col md:justify-end justify-center">
                <span className="font-semibold text-[#a78847] md:text-left text-center">Behind The Insignia</span>
                <div className="flex items-end mb-2">

                <h2 className="inline font-hb text-2xl text-center md:text-left md:text-3xl md:my-0">
                We are
                </h2>
                <img src="/images/logo.png" alt="logo" className="ml-4 w-32 mb-2" />
                </div>
                <p className="py-2 border-b-2 md:border-b-4 text-xs md:text-base border-[#D8B25D] md:w-11/12 md:text-left text-center uppercase">
                PVV Infra Limited is a successful publicly traded construction company listed on the Bombay Stock Exchange (BSE). With a diversified portfolio, the company engages in various infrastructure projects, including commercial and residential buildings, landscaping, and housing for different income groups. Their involvement in earthwork pipelines demonstrates their engagement in utilities and infrastructure development. The company's positive growth is reflected in its current share price, indicating investor confidence in its operations and future prospects.
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start items-start relative mt-20">
                <img src="/images/rect.png" alt="rect" className="absolute -top-12 right-0 z-0 w-10/12" />
                <img src="/images/behind.png" alt="behind" className="z-10 w-11/12" />
            </div>
        </div>
    )
}