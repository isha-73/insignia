import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Dropdown, Ripple });
export default function Map() {
    var List = {
        "SHOPPING": [
            "Mall of India",
            "DLF Mall of India",
            "Prozone Mall",
            "Logix City Centre Mall"
        ],
        "BANKS": [
            "HDFC Bank",
            "ICICI Bank",
            "Axis Bank",
            "State Bank of India"
        ],
        "THEATRES": [
            "PVR Cinemas",
            "Wave Cinemas",
            "Carnival Cinemas",
            "INOX Cinemas"
        ],
        "EDUCATIONAL INSTITUTES": [
            "Amity University",
            "Galgotias University",
            "Sharda University",
            "NIIT University"
        ],
        "REGIONAL PLACES": [
            "Noida Stadium",
            "Golf Course",
            "Botanical Garden",
            "Noida Golf Course"
        ],
        "HOTEL": [
            "Radisson Blu",
            "Park Ascent",
            "Sandal Suites",
            "Mosaic Hotel"
        ],
        "HOSPITAL": [
            "Fortis Hospital",
            "Kailash Hospital",
            "Metro Hospital",
            "Max Hospital"
        ],
        "NEARBY LANDMARKS": [
            "Sector 18",
            "Sector 62",
            "Sector 63",
            "Sector 64"
        ],
        "CORPORATE AND BUSINESS HUB": [
            "Sector 62",
            "Sector 63",
            "Sector 64",
            "Sector 65"
        ]

    }
    return (
        <div className="flex flex-col mt-2 md:px-10 lg:px-20">
            <h2 className="font-hl text-[18px] text-left md:text-3xl my-2 md:my-0 px-6 md:px-0">
                PROMINENT LANDMARKS THAT<br />BRING YOUR WORLD CLOSER
            </h2>

            <div className="flex flex-col md:flex-row mt-4 md:mt-10">
                <img src="/images/map.png" alt="map" className="md:w-3/5 md:mr-8" />

                <div className="flex flex-col w-full px-6 md:px-0 mt-6 md:mt-0">
                    {Object.keys(List).map((category, index) => (
                        <div key={index} className="relative" data-te-dropdown-ref>
                            <Dropdown
                                data-te-dropdown-toggle-ref
                                id={`dropdownMenuButton${index}`}
                                trigger={() => (
                                    <button
                                        className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        type="button"
                                        aria-expanded="false"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        {category}
                                        <span className="ml-2 w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                )}
                            >
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby={`dropdownMenuButton${index}`}
                                    data-te-dropdown-menu-ref
                                >
                                    {List[category].map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <a
                                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Dropdown>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}