import React, { useState } from 'react';
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
    const [expandedCategory, setExpandedCategory] = useState('');

    const handleCategoryToggle = (category) => {
        if (expandedCategory === category) {
            setExpandedCategory('');
        } else {
            setExpandedCategory(category);
        }
    };

    return (
        <div className="flex flex-col mt-2 md:px-10 lg:px-20">
            <h2 className="font-hl text-[18px] text-left md:text-3xl my-2 md:my-0 px-6 md:px-0">
                PROMINENT LANDMARKS THAT<br />BRING YOUR WORLD CLOSER
            </h2>

            <div className="flex flex-col md:flex-row mt-4 md:mt-10">
                <img src="/images/map.png" alt="map" className="md:w-3/5 md:mr-8" />

                <div className="flex flex-col w-full px-6 md:px-0 mt-6 md:mt-0">
                    {Object.keys(List).map((category) => (
                        <div key={category} className="mb-2">
                            <button
                                className="border-t-2 border-[#D8B25D] px-6 py-3 flex justify-between items-center w-full"
                                onClick={() => handleCategoryToggle(category)}
                            >
                                <p className="font-hl uppercase md:text-[18px] text-[13px]">{category}</p>
                                <img src="/images/down.svg" alt="arrow" className="w-6" />
                            </button>
                            {expandedCategory === category && (
                                <ul className="mt-2">
                                    {List[category].map((landmark) => (
                                        <li key={landmark} className='font uppercase border-t-2 border-[#faecce] px-6 py-3 flex'>{landmark}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}