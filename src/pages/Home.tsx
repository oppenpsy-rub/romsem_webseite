import React from 'react';
import { ArrowRight, Book, Users, Globe, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col pb-12">
      {/* Hero Section - Clean RUB Style */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-rub-blue leading-tight">
              Romanisches Seminar der <br/>
              <span className="text-rub-green">Ruhr-Universität Bochum</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Willkommen an einem der größten romanistischen Institute im deutschsprachigen Raum. Wir verbinden exzellente Forschung mit einem vielfältigen Lehrangebot in Französisch, Italienisch und Spanisch.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/studium" className="bg-rub-blue text-white px-6 py-3 rounded font-semibold hover:bg-rub-green transition flex items-center gap-2">
                Studienangebot <ArrowRight size={20} />
              </Link>
              <Link to="/kontakt" className="border-2 border-rub-blue text-rub-blue px-6 py-3 rounded font-semibold hover:bg-rub-blue hover:text-white transition">
                Kontakt & Anfahrt
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-rub-green opacity-10 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="RUB Campus" 
              className="rounded-3xl shadow-xl relative z-10 w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Quick Access Tiles (Kacheln) */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tile 1 */}
            <Link to="/studium" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-blue h-full flex flex-col">
              <div className="mb-4 text-rub-blue group-hover:text-rub-green transition">
                <Book size={32} />
              </div>
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Studium</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Alles zu Bachelor- und Masterstudiengängen, Modulen und Prüfungsordnungen.
              </p>
              <div className="mt-4 flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Mehr erfahren <ChevronRight size={16} />
              </div>
            </Link>

            {/* Tile 2 */}
            <Link to="/seminar" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-green h-full flex flex-col">
              <div className="mb-4 text-rub-green group-hover:text-rub-blue transition">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Das Seminar</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Professuren, Mitarbeitende, Fachschaft und die Bibliothek des Seminars.
              </p>
              <div className="mt-4 flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Personen & Bereiche <ChevronRight size={16} />
              </div>
            </Link>

            {/* Tile 3 */}
            <Link to="/forschung" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-blue h-full flex flex-col">
              <div className="mb-4 text-rub-blue group-hover:text-rub-green transition">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Forschung</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Projekte, Publikationen, Tagungen und wissenschaftliche Zeitschriften.
              </p>
              <div className="mt-4 flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Forschungsprofile <ChevronRight size={16} />
              </div>
            </Link>

            {/* Tile 4 */}
            <Link to="/internationales" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-green h-full flex flex-col">
              <div className="mb-4 text-rub-green group-hover:text-rub-blue transition">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Internationales</h3>
              <p className="text-gray-600 text-sm flex-grow">
                Erasmus, Auslandssemester und Partneruniversitäten weltweit.
              </p>
              <div className="mt-4 flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Wege ins Ausland <ChevronRight size={16} />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-rub-blue">Aktuelles</h2>
          <Link to="/news" className="text-rub-blue hover:text-rub-green font-semibold flex items-center gap-1">
            Alle Meldungen <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* News Item 1 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Studierende" 
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar size={14} className="text-rub-green" />
              <span>12. Januar 2026</span>
            </div>
            <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">
              Infoveranstaltung zum Erasmus-Programm 2026/2027
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              Am 14. Januar findet die zentrale Informationsveranstaltung für alle Studierenden statt, die im kommenden akademischen Jahr ins Ausland gehen möchten.
            </p>
          </article>

          {/* News Item 2 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Konferenz" 
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar size={14} className="text-rub-green" />
              <span>08. Januar 2026</span>
            </div>
            <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">
              Gastvortrag: "Digitale Methoden in der Romanistik"
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              Prof. Dr. Maria Rossi (Universität Bologna) spricht über den Einsatz von KI in der literaturwissenschaftlichen Analyse. HZO 20, 18:00 Uhr.
            </p>
          </article>

          {/* News Item 3 */}
          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4">
              <div className="w-full h-48 bg-rub-blue flex items-center justify-center text-white text-4xl font-bold transform group-hover:scale-105 transition duration-500">
                LJB
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar size={14} className="text-rub-green" />
              <span>02. Januar 2026</span>
            </div>
            <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">
              Neuer Band des Literaturwissenschaftlichen Jahrbuchs
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              Der aktuelle Band ist erschienen und enthält Beiträge zur französischen und italienischen Literatur der Renaissance.
            </p>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Home;
