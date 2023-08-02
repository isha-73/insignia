import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import CenterOfDadar from "./components/CenterOfDadar";
import Map from "./components/Map";
import Floorplan from "./components/FloorPlan";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Behind from "./components/Behind";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="md:h-[180px] h-[140px] bg-[#D8B25D] font-hb flex justify-center items-center text-center px-6 md:px-20 text-[20px] md:text-[32px]">
        UNVEILING THE EPITOME OF LUXURIOUS LIVING
      </div>
      <About />
      <div className="md:h-[340px] h-[200px] bg-[#D8AF5D66] flex flex-col justify-center items-center text-center relative">
        <img src="/images/sectionbg.png" alt="bg" className="h-full" />
        <div className="absolute">

          <h2 className="text-xl md:text-5xl font-hb px-12 md:px-72 mb-4 md:mb-10">EXPERIENCE THE NEW DADAR</h2>
          <p className="text-sm md:text-xl md:font-medium px-6 md:px-72 uppercase">Be at the Top of the crown of Luxury & Lifestyle That is rare ,  Premium & Top of the World</p>
        </div>
      </div>
      <img src="/images/display.png" alt="display" className="w-full" />
      <Card />
      <Carousel />
      <CenterOfDadar />
      <Map />
      <Floorplan />
      <div className="px-0 md:px-10 lg:px-20 mb-20">
        <div className="bg-[#D8B25D] h-[185px] flex flex-col justify-center items-center">
          <h3 className="font-hb text-2xl md:text-[32px] text-center mt-3 mb-2">JODI OPTION IS ALSO AVAILABLE!</h3>
          <button className="text-[#131313] border-2 border-[#131313] mb-3 mt-2 py-3 px-10 font-semibold">
            Contact Us
          </button>
        </div>
      </div>
      <Behind />
      <div className="px-0 md:px-10 lg:px-20 mb-20">
        <div className="bg-[#D8B25D] h-[102px] md:h-[132px] flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold md:text-5xl text-center mt-3 mb-2">P51900012105</h3>
          <p className="text-xs md:text-base md:font-medium">RERA ( Real estate Regulatory Authority) Number</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
