import 'tailwindcss/tailwind.css';
import CardsCarousel from './CardsCarousel';

export default function Front() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 bg-opacity-90 gap-4 mt-24">
      {/* First Column */}
      <div className="bg-white border-4 border-green-800 rounded-lg p-6 max-w-lg w-full text-center">
        <p className="text-lg text-gray-700">
          KSR ELECTRICALS provides reliable and efficient services for the energy industry. 
          We specialize in substations, line work, wind, and solar projects, setting the benchmark 
          for innovative and environmentally conscious technologies.
        </p>
      </div>

      {/* Second Column */}
      <div className="flex justify-center items-center w-full lg:w-auto">
        <CardsCarousel />
      </div>

      {/* Third Column */}
      <div className="bg-white border-4 border-green-800 rounded-lg p-6 max-w-lg w-full text-center">
        <p className="text-lg text-gray-700">
          With over 50 employees and 15 years of expertise, we are committed to delivering quality 
          and client satisfaction.
        </p>
      </div>
    </div>
  );
}
