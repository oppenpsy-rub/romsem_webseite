import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name: string) => {
    if (dropdownOpen === name) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(name);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-rub-blue text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span>Ruhr-Universität Bochum</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-rub-green transition">RUB-Portal</a>
            <a href="#" className="hover:text-rub-green transition">Bibliothek</a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-rub-blue text-white flex items-center justify-center font-bold text-2xl rounded group-hover:bg-rub-green transition-colors">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-rub-blue leading-none">Romanisches Seminar</span>
              <span className="text-sm text-gray-600">Fakultät für Philologie</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 font-medium">
            <Link to="/" className={`px-3 py-2 rounded hover:text-rub-green transition ${isActive('/') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
              Start
            </Link>
            
            {/* Studium Dropdown */}
            <div className="relative group">
              <button className={`px-3 py-2 rounded hover:text-rub-green transition flex items-center gap-1 ${isActive('/studium') || isActive('/studium/ba') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
                Studium <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden hidden group-hover:block border-t-2 border-rub-green">
                <Link to="/studium" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rub-green">Übersicht</Link>
                <Link to="/studium/ba" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rub-green">Bachelor (B.A.)</Link>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rub-green">Master (M.A./M.Ed.)</a>
              </div>
            </div>

            {/* Seminar Dropdown */}
            <div className="relative group">
              <button className={`px-3 py-2 rounded hover:text-rub-green transition flex items-center gap-1 ${isActive('/seminar') || isActive('/personal') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
                Seminar <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden hidden group-hover:block border-t-2 border-rub-green">
                <Link to="/seminar" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rub-green">Übersicht</Link>
                <Link to="/personal" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rub-green">Personen A-Z</Link>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-rub-green">Fachschaft</a>
              </div>
            </div>

            <Link to="/forschung" className={`px-3 py-2 rounded hover:text-rub-green transition ${isActive('/forschung') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
              Forschung
            </Link>

            <Link to="/internationales" className={`px-3 py-2 rounded hover:text-rub-green transition ${isActive('/internationales') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
              Internationales
            </Link>

            <Link to="/news" className={`px-3 py-2 rounded hover:text-rub-green transition ${isActive('/news') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
              Aktuelles
            </Link>

            <Link to="/kontakt" className={`px-3 py-2 rounded hover:text-rub-green transition ${isActive('/kontakt') ? 'text-rub-blue font-bold' : 'text-gray-700'}`}>
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-rub-blue" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-inner">
          <Link to="/" className="block py-2 text-gray-700 font-medium" onClick={toggleMenu}>Start</Link>
          
          <div className="py-2">
            <button onClick={() => toggleDropdown('studium')} className="flex justify-between items-center w-full text-gray-700 font-medium">
              Studium <ChevronDown size={16} className={`transform transition ${dropdownOpen === 'studium' ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen === 'studium' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                <Link to="/studium" className="block text-gray-600" onClick={toggleMenu}>Übersicht</Link>
                <Link to="/studium/ba" className="block text-gray-600" onClick={toggleMenu}>Bachelor (B.A.)</Link>
              </div>
            )}
          </div>

          <div className="py-2">
            <button onClick={() => toggleDropdown('seminar')} className="flex justify-between items-center w-full text-gray-700 font-medium">
              Seminar <ChevronDown size={16} className={`transform transition ${dropdownOpen === 'seminar' ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen === 'seminar' && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                <Link to="/seminar" className="block text-gray-600" onClick={toggleMenu}>Übersicht</Link>
                <Link to="/personal" className="block text-gray-600" onClick={toggleMenu}>Personen A-Z</Link>
              </div>
            )}
          </div>

          <Link to="/forschung" className="block py-2 text-gray-700 font-medium" onClick={toggleMenu}>Forschung</Link>
          <Link to="/internationales" className="block py-2 text-gray-700 font-medium" onClick={toggleMenu}>Internationales</Link>
          <Link to="/news" className="block py-2 text-gray-700 font-medium" onClick={toggleMenu}>Aktuelles</Link>
          <Link to="/kontakt" className="block py-2 text-gray-700 font-medium" onClick={toggleMenu}>Kontakt</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
