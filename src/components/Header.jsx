import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white bg-opacity-90 text-black p-4 fixed top-0 left-0 w-full z-50 shadow-md ">
      <nav className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-orange-600">
          <img src="./src/img/logo.JPG" alt="Logo" className="h-10 w-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-orange-600">KSR Electricals</h1>
        <ul className="flex flex-wrap space-x-4">
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/services" className="hover:text-orange-600">Services</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
