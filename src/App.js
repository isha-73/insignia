import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Card from "./components/Card";

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
    </div>
  );
}
