import React from 'react';
import { User, Mail, Globe, Library } from 'lucide-react';

const professors = [
  {
    name: "Prof. Dr. Roger Friedlein",
    role: "Romanische Philologie, insbes. iberoromanische Literatur- und Kulturwissenschaft",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Prof. Dr. Susanne A. Friede",
    role: "Romanische Philologie, insbes. französische Literatur",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Prof. Dr. Sara Matrisciano-Mayerhofer",
    role: "Romanische Philologie, insbes. französische und italienische Sprachwissenschaft",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Prof. Dr. Christian Grünnagel",
    role: "Romanische Philologie, insbes. Literaturwissenschaft und Didaktik der romanischen Literaturen",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Prof. Dr. David Nelting",
    role: "Romanische Philologie, insbes. italienische Literatur",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Prof. Dr. Laura Morgenthaler-Garcia",
    role: "Romanische Philologie, insbes. iberoromanische Sprachwissenschaft",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Prof. Dr. Judith Visser",
    role: "Romanische Philologie, insbes. Sprachwissenschaft und Didaktik der romanischen Sprachen",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Jun.-Prof. Dr. Jasmin Wrobel",
    role: "Iberoromanische Kulturwissenschaft mit Schwerpunkt Lateinamerika",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Seminar = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Das Seminar</h1>
          <p className="text-xl text-gray-200">
            Menschen, Gremien und Einrichtungen des Romanischen Seminars.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-2">
            <h2 className="text-3xl font-bold text-rub-blue">Professuren</h2>
            <Link to="/personal" className="text-rub-blue hover:text-rub-green font-semibold flex items-center gap-1 text-sm mb-2">
              Alle Mitarbeitenden anzeigen <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professors.map((prof, index) => (
              <div key={index} className="bg-white rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-blue p-6 flex flex-col items-center text-center h-full">
                <div className="relative mb-4">
                   <img src={prof.img} alt={prof.name} className="w-24 h-24 rounded-full object-cover border-2 border-gray-100 group-hover:border-rub-green transition" />
                </div>
                <h3 className="font-bold text-lg text-rub-blue mb-2 group-hover:text-rub-green transition">{prof.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{prof.role}</p>
                <div className="flex gap-3 mt-auto">
                  <button className="text-gray-400 hover:text-rub-blue transition"><Mail size={18} /></button>
                  <button className="text-gray-400 hover:text-rub-blue transition"><Globe size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-rub-blue mb-4 flex items-center gap-2">
              <Library className="text-rub-green" /> Fachbibliothek
            </h3>
            <p className="text-gray-600 mb-4">
              Unsere Fachbibliothek befindet sich auf Etage 7 und 8 des Gebäudes GB. Sie bietet einen umfangreichen Bestand an Fachliteratur zu den romanischen Sprachen und Literaturen.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-6">
              <p><strong>Öffnungszeiten:</strong> Mo-Fr 09:00 - 20:00 Uhr</p>
              <p><strong>Ort:</strong> GB 7/39</p>
            </div>
            <button className="bg-white border border-rub-blue text-rub-blue px-4 py-2 rounded hover:bg-rub-blue hover:text-white transition">
              Zur Bibliotheksseite
            </button>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-rub-blue mb-4 flex items-center gap-2">
              <User className="text-rub-green" /> Fachschaft
            </h3>
            <p className="text-gray-600 mb-4">
              Der Fachschaftsrat Romanistik vertritt die Interessen der Studierenden am Seminar. Wir organisieren Veranstaltungen, Partys und bieten Beratung von Studis für Studis.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-6">
              <p><strong>Sitzung:</strong> Jeden Mittwoch, 18:00 Uhr</p>
              <p><strong>Raum:</strong> GB 7/160</p>
            </div>
            <button className="bg-white border border-rub-blue text-rub-blue px-4 py-2 rounded hover:bg-rub-blue hover:text-white transition">
              Fachschaft kontaktieren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seminar;
