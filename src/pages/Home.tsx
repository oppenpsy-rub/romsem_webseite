import React from 'react';
import { ArrowRight, Book, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative bg-rub-blue text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rub-blue to-blue-900 opacity-90 z-0"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Herzlich willkommen am <span className="text-rub-green">Romanischen Seminar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              Mit acht Professuren und ca. 1.700 Studierenden sind wir eines der größten romanistischen Institute im deutschsprachigen Raum.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/studium" className="bg-rub-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center gap-2">
                Studium entdecken <ArrowRight size={20} />
              </Link>
              <Link to="/seminar" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Ticker / Quick Info */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center text-sm">
          <span className="font-bold text-rub-blue mr-4 px-2 py-1 bg-rub-blue/10 rounded">NEWS</span>
          <div className="overflow-hidden whitespace-nowrap">
            <p className="animate-marquee inline-block text-gray-700">
              ++ Infoveranstaltung zum Erasmus-Programm 2026/2027 ++ Projekt „Spanisch als Herkunftssprache an der RUB“ gestartet ++ Anmeldung zu den Sprachkursen ab sofort möglich ++
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Areas */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20">
          {/* Card 1: Studium */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-rub-green hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 bg-rub-green/10 rounded-full flex items-center justify-center text-rub-green mb-6">
              <Book size={24} />
            </div>
            <h3 className="text-2xl font-bold text-rub-blue mb-4">Studium</h3>
            <p className="text-gray-600 mb-6">
              Umfangreiches Lehrangebot zu Französisch, Italienisch und Spanisch in Bachelor-, Master- und Lehramtsstudiengängen.
            </p>
            <Link to="/studium" className="text-rub-blue font-semibold hover:text-rub-green flex items-center gap-1 group">
              Studiengänge ansehen <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Card 2: Forschung */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-rub-blue hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 bg-rub-blue/10 rounded-full flex items-center justify-center text-rub-blue mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-2xl font-bold text-rub-blue mb-4">Forschung</h3>
            <p className="text-gray-600 mb-6">
              International vernetzte Forschung, Herausgabe von Fachzeitschriften und Projekte wie das Alfried-Krupp Schülerlabor.
            </p>
            <Link to="/forschung" className="text-rub-blue font-semibold hover:text-rub-green flex items-center gap-1 group">
              Forschungsprojekte <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Card 3: Seminar */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-rub-green hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 bg-rub-green/10 rounded-full flex items-center justify-center text-rub-green mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-bold text-rub-blue mb-4">Das Seminar</h3>
            <p className="text-gray-600 mb-6">
              Informationen zu Professuren, Mitarbeitenden, der Fachbibliothek und unseren Angeboten zur Studienberatung.
            </p>
            <Link to="/seminar" className="text-rub-blue font-semibold hover:text-rub-green flex items-center gap-1 group">
              Team kennenlernen <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Campus RUB" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-rub-blue mb-6">Willkommen in Bochum</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die Bochumer Romanistik ist international bestens vernetzt und bietet ein dynamisches Umfeld für Studium und Forschung.
              </p>
              <p>
                Unser hohes Engagement zeigt sich an der Schnittstelle zwischen Studium und Beruf. Wir bieten Sprachzertifikate auch in Katalanisch und Portugiesisch an und fördern den Austausch durch zahlreiche internationale Kooperationen.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-rub-green mb-1">8</div>
                  <div className="text-sm text-gray-600 font-medium">Professuren</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-rub-blue mb-1">1.700+</div>
                  <div className="text-sm text-gray-600 font-medium">Studierende</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / News Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-rub-blue mb-2">Aktuelles & Projekte</h2>
              <p className="text-gray-600">Neuigkeiten aus dem Seminarleben</p>
            </div>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-rub-green font-semibold hover:text-rub-blue transition">
              Alle Meldungen <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Students" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-rub-green uppercase tracking-wider">Studium</span>
                <h3 className="text-xl font-bold text-rub-blue mt-2 mb-3 group-hover:text-rub-green transition">Erasmus-Programm 2026/27</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Informationsveranstaltung für alle interessierten Studierenden. Jetzt bewerben für ein Auslandssemester!
                </p>
                <Link to="#" className="text-rub-blue text-sm font-semibold hover:underline">Mehr lesen</Link>
              </div>
            </article>

            {/* News Item 2 */}
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Conference" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-rub-green uppercase tracking-wider">Forschung</span>
                <h3 className="text-xl font-bold text-rub-blue mt-2 mb-3 group-hover:text-rub-green transition">Tagung: Romanistik Digital</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Internationale Tagung zur Digitalisierung in der romanistischen Forschung und Lehre.
                </p>
                <Link to="#" className="text-rub-blue text-sm font-semibold hover:underline">Mehr lesen</Link>
              </div>
            </article>

            {/* News Item 3 */}
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Books" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-rub-green uppercase tracking-wider">Bibliothek</span>
                <h3 className="text-xl font-bold text-rub-blue mt-2 mb-3 group-hover:text-rub-green transition">Neue Öffnungszeiten</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Die Fachbibliothek Romanistik passt zum Semesterstart ihre Öffnungszeiten an.
                </p>
                <Link to="#" className="text-rub-blue text-sm font-semibold hover:underline">Mehr lesen</Link>
              </div>
            </article>
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/news" className="inline-flex items-center gap-2 text-rub-green font-semibold hover:text-rub-blue transition">
              Alle Meldungen <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
