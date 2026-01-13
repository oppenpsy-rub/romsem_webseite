import React from 'react';
import { Mail, Phone, MapPin, Clock, Info } from 'lucide-react';

const Kontakt = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Kontakt & Anfahrt</h1>
          <p className="text-xl text-gray-200">
            So erreichen Sie das Romanische Seminar der Ruhr-Universität Bochum.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Anschrift</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                <MapPin className="text-rub-green flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Ruhr-Universität Bochum</p>
                  <p className="text-gray-600">Romanisches Seminar</p>
                  <p className="text-gray-600">Universitätsstraße 150</p>
                  <p className="text-gray-600">Gebäude GB, Etage 7 & 8</p>
                  <p className="text-gray-600">44801 Bochum</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Geschäftszimmer</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-rub-green" size={20} />
                  <div>
                    <span className="font-bold block text-sm text-gray-500">Telefon</span>
                    <span className="text-gray-800">+49 234 32-20000</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-rub-green" size={20} />
                  <div>
                    <span className="font-bold block text-sm text-gray-500">E-Mail</span>
                    <a href="mailto:romanistik@rub.de" className="text-rub-blue hover:underline">romanistik@rub.de</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-rub-green" size={20} />
                  <div>
                    <span className="font-bold block text-sm text-gray-500">Öffnungszeiten</span>
                    <p className="text-gray-800">Mo - Do: 09:00 - 12:00 Uhr</p>
                    <p className="text-gray-800">Fr: geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Directions */}
          <div>
            <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Anreise</h2>
            <div className="bg-gray-200 w-full h-64 rounded-lg mb-6 flex items-center justify-center text-gray-500">
              {/* Placeholder for Map - In a real app, embed Google Maps or OpenStreetMap here */}
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                <span>Interaktive Karte hier einbinden</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-rub-blue/10 p-2 rounded text-rub-blue h-fit">
                  <Info size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-rub-blue">Mit öffentlichen Verkehrsmitteln</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    U-Bahn U35 (CampusLinie) ab Bochum Hbf Richtung Hustadt bis Haltestelle "Ruhr-Universität". Von dort ca. 5-10 Minuten Fußweg zum Gebäude GB.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-rub-blue/10 p-2 rounded text-rub-blue h-fit">
                  <Info size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-rub-blue">Mit dem Auto</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Über die A43 bis zur Abfahrt "Bochum-Querenburg / Universität". Folgen Sie der Beschilderung zu den Parkhäusern (P9-P13 für GB am nächsten).
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Kontakt;
