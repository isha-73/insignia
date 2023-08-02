import Carousel from 'react-elastic-carousel'
import React from 'react'

const data = [
    {
        id: 1,
        title: "Senior citizen Area",
        description: "Place for the wisdom to spend quality Time",
    },
    {
        id: 2,
        title: "Community Centre & Banquet",
        description: "Place for the wisdom to spend quality Time",
    },
    {
        id: 3,
        title: "Zen Meditation Pod & Yoga Deck",
        description: "The Zone of Sole search and your True self",
    },
    {
        id: 4,
        title: "Private Café with Juice Bar & Barbeque Alcove",
        description: "A Sizzling Treat & some of the most Exciting views pour into your Cup.",
    },
    {
        id: 5,
        title: "CCTV SURVEILLANCE SYSTEM & 24/7 MANNED SECURITY",
        description: "Always the eyes of Safety and Security",
    },
    {
        id: 6,
        title: "PUZZLE CAR PARK",
        description: "CRUIZE TO YOUR OWN WORLD WITH COVENIENCE",
    }
]

let breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 5, pagination: false },
    { width: 1450, itemsToShow: 6, pagination: false }
]

class MyCarousel extends React.Component {
    myArrow({ type, onClick, isEdge }) {
        return (
          <></>
        )
      }
    render() {
        return (
            <div className="flex flex-col justify-center items-center relative">
                <h2 className="font-hb text-4xl text-center">
                    AMENITIES
                </h2>
                <img src="/images/sep.png" alt="sep" className="mx-auto mb-20" />
                <img src="/images/left.svg" alt="left" className="md:hidden absolute w-10 left-16 z-50" onClick={() => this.carousel.slidePrev()} />
                <Carousel ref={ref => (this.carousel = ref)} renderArrow={this.myArrow} breakPoints={breakPoints} itemPadding={[ 0 ]}>
                    {
                        data.map((item) => (
                            <div key={item.id} className="w-[220px] flex flex-col justify-start items-start mx-2">
                                <img src={`/images/carausel/${item.id}.png`} alt="cardimg" className="w-full h-[296px]" />
                                <h3 className="text-base my-2 uppercase">
                                    {item.title}
                                </h3>
                                <img src="/images/sep2.png" alt="sep" />
                                <p className="text-sm mt-2 uppercase">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </Carousel>
                    <img src="/images/right.svg" alt="right" className="md:hidden absolute w-10 right-16 z-50" onClick={() => this.carousel.slideNext()} />

                <div className='md:flex my-16 hidden'>
                    <img src="/images/left.svg" alt="left" className="mx-4" onClick={() => this.carousel.slidePrev()} />
                    <img src="/images/right.svg" alt="right" className="mx-4" onClick={() => this.carousel.slideNext()} />
                </div>
            </div>
        )
    }
}

export default MyCarousel;