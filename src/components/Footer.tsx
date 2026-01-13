import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rub-blue text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-rub-green inline-block pb-1">Kontakt</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-rub-green" size={18} />
                <p>
                  Ruhr-Universität Bochum<br />
                  Romanisches Seminar<br />
                  Universitätsstraße 150<br />
                  44801 Bochum
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-rub-green" size={18} />
                <p>+49 234 32-20000 (Zentrale)</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-rub-green" size={18} />
                <p>romanistik@rub.de</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-rub-green inline-block pb-1">Wichtige Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rub-green transition flex items-center gap-2"><ExternalLink size={14} /> RUB Startseite</a></li>
              <li><a href="#" className="hover:text-rub-green transition flex items-center gap-2"><ExternalLink size={14} /> Fakultät für Philologie</a></li>
              <li><a href="#" className="hover:text-rub-green transition flex items-center gap-2"><ExternalLink size={14} /> Campusplan</a></li>
              <li><a href="#" className="hover:text-rub-green transition flex items-center gap-2"><ExternalLink size={14} /> Bibliothek</a></li>
            </ul>
          </div>

          {/* Social / Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-rub-green inline-block pb-1">Rechtliches & Social</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-rub-green transition">Facebook</a>
                <a href="#" className="hover:text-rub-green transition">Instagram</a>
                <a href="#" className="hover:text-rub-green transition">Twitter</a>
              </div>
              <div className="text-sm space-y-1">
                <p><a href="#" className="hover:underline">Impressum</a></p>
                <p><a href="#" className="hover:underline">Datenschutz</a></p>
                <p><a href="#" className="hover:underline">Barrierefreiheit</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Romanisches Seminar - Ruhr-Universität Bochum
        </div>
      </div>
    </footer>
  );
};

export default Footer;
