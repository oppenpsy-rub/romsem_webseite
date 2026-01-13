import React from 'react';
import { Globe, MapPin, Users, GraduationCap, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Internationales = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Internationales</h1>
          <p className="text-xl text-gray-200">
            Austauschprogramme, Partneruniversitäten und Doppelabschlüsse.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Intro */}
        <div className="mb-12">
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Das Romanische Seminar der RUB ist international bestens vernetzt. Wir pflegen intensive Kontakte zu zahlreichen Universitäten im europäischen Ausland und in Lateinamerika. Studierenden bieten wir vielfältige Möglichkeiten, Auslandserfahrung zu sammeln.
          </p>
        </div>

        {/* Erasmus Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-rub-blue mb-8 flex items-center gap-2 border-b border-gray-200 pb-2">
            <Globe className="text-rub-green" /> Erasmus+ Programme
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Italien */}
            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-rub-blue">
              <h3 className="text-xl font-bold text-rub-blue mb-4 flex items-center gap-2">
                <span className="text-2xl">🇮🇹</span> Italien
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Wir unterhalten Partnerschaften mit zahlreichen italienischen Universitäten, u.a. in Cassino, Padua, Neapel, Siena, Viterbo, Udine, Catania und Turin.
              </p>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-bold text-gray-700 mb-2 text-sm">Fachkoordination</h4>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-rub-blue">Prof. Dr. Gerald Bernhard</p>
                  <p className="text-xs text-gray-500">GB 7/31</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-rub-blue">Dr. Judith Kittler</p>
                  <p className="text-xs text-gray-500">GB 7/137</p>
                </div>
              </div>
              
              <a href="#" className="text-rub-blue font-bold text-sm hover:underline flex items-center">
                Alle Partneruniversitäten in Italien <ArrowRight size={14} className="ml-1" />
              </a>
            </div>

            {/* Frankreich */}
            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-rub-blue">
              <h3 className="text-xl font-bold text-rub-blue mb-4 flex items-center gap-2">
                <span className="text-2xl">🇫🇷</span> Frankreich
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Studieren Sie an unseren Partnerhochschulen in ganz Frankreich. Vom Norden bis in den Süden bieten wir Austauschplätze für Bachelor- und Masterstudierende.
              </p>

              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-bold text-gray-700 mb-2 text-sm">Beratung & Koordination</h4>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-rub-blue">Kentin Le Provost</p>
                  <p className="text-xs text-gray-500">GB 7/138</p>
                  <a href="mailto:erasmus-frankreich@rub.de" className="text-xs text-rub-green hover:underline flex items-center gap-1 mt-1">
                    <Mail size={10} /> erasmus-frankreich@rub.de
                  </a>
                </div>
              </div>

              <a href="#" className="text-rub-blue font-bold text-sm hover:underline flex items-center">
                Alle Partneruniversitäten in Frankreich <ArrowRight size={14} className="ml-1" />
              </a>
            </div>

             {/* Spanien */}
             <div className="bg-white p-6 rounded shadow-sm border-t-4 border-rub-blue md:col-span-2">
              <h3 className="text-xl font-bold text-rub-blue mb-4 flex items-center gap-2">
                <span className="text-2xl">🇪🇸</span> Spanien & Lateinamerika
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Auch für Hispanisten bieten wir ein breites Netzwerk an Partneruniversitäten auf der iberischen Halbinsel und darüber hinaus.
              </p>
              <a href="#" className="text-rub-blue font-bold text-sm hover:underline flex items-center">
                Informationen zum Spanien-Austausch <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Doppelabschluss Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-rub-blue mb-8 flex items-center gap-2 border-b border-gray-200 pb-2">
            <GraduationCap className="text-rub-green" /> Internationale Studiengänge
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-rub-blue p-8 md:w-1/3 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Double Degree: Franko-Germanistische Studien</h3>
              <p className="text-blue-100 mb-6">
                Ein einzigartiger Studiengang in Kooperation mit der Université de La Réunion.
              </p>
              <div className="flex gap-2">
                 <span className="bg-white/20 px-3 py-1 rounded text-sm">Bochum</span>
                 <span className="bg-white/20 px-3 py-1 rounded text-sm">La Réunion</span>
              </div>
            </div>
            <div className="p-8 md:w-2/3">
              <h4 className="font-bold text-gray-800 mb-2">Deutschsprachiger Raum und Überseefrankreich</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Dieser binationale 2-Fach-Bachelor ermöglicht es Studierenden, einen Doppelabschluss zu erwerben. Das Programm verbindet die französischsprachige Germanistik mit der deutschsprachigen Romanistik.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> 1. & 2. Semester: Ruhr-Universität Bochum</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> 3. & 4. Semester: Université de La Réunion</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> 5. & 6. Semester: Ruhr-Universität Bochum</li>
              </ul>
              <div className="flex gap-4">
                 <a href="#" className="bg-rub-blue text-white px-4 py-2 rounded text-sm hover:bg-rub-green transition">
                   Bewerbungsinfos
                 </a>
                 <a href="#" className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50 transition">
                   Modulplan
                 </a>
              </div>
            </div>
          </div>
        </div>

        {/* PAD Section */}
        <div>
          <h2 className="text-2xl font-bold text-rub-blue mb-8 flex items-center gap-2 border-b border-gray-200 pb-2">
            <Users className="text-rub-green" /> Weitere Möglichkeiten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-rub-blue mb-2">Fremdsprachenassistenz (PAD)</h3>
              <p className="text-gray-600 text-sm mb-4">
                Sammeln Sie praktische Lehrerfahrung im Ausland. Der Pädagogische Austauschdienst (PAD) vermittelt Stellen an Schulen in Frankreich, Italien, Spanien und vielen anderen Ländern.
              </p>
              <a href="#" className="text-rub-blue font-bold text-sm hover:underline">Mehr zum PAD</a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-rub-blue mb-2">Praktika im Ausland</h3>
              <p className="text-gray-600 text-sm mb-4">
                Wir unterstützen Sie bei der Suche nach Praktikumsplätzen in romanischsprachigen Ländern, sei es in Kulturinstituten, Unternehmen oder NGOs.
              </p>
              <a href="#" className="text-rub-blue font-bold text-sm hover:underline">Praktikumsbörse</a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Internationales;
