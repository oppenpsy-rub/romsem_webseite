import React from 'react';
import { BookOpen, GraduationCap, Languages, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Studium = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Studium</h1>
          <p className="text-xl text-gray-200">
            Entdecken Sie unser vielfältiges Lehrangebot in den romanischen Sprachen und Literaturen.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Studiengänge Section with Tiles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-rub-blue mb-8 flex items-center gap-2 border-b border-gray-200 pb-2">
            <GraduationCap className="text-rub-green" /> Studiengänge & Abschlüsse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bachelor Tile */}
            <Link to="#" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-blue flex flex-col h-full">
              <h3 className="text-xl font-bold text-rub-blue mb-3 group-hover:text-rub-green transition">Bachelor of Arts (B.A.)</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Der 2-Fächer-Bachelor bietet Ihnen die Möglichkeit, zwei Fächer zu kombinieren. Sie können Romanistik als eines oder beide Fächer wählen.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> Basismodule Sprachpraxis</li>
                <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> Einführungskurse</li>
              </ul>
              <div className="mt-auto flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Zum B.A. Studium <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>

            {/* Master Tile */}
            <Link to="#" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-blue flex flex-col h-full">
              <h3 className="text-xl font-bold text-rub-blue mb-3 group-hover:text-rub-green transition">Master of Arts (M.A.)</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Forschungsorientierte Vertiefung. Spezialisierung in Literatur- oder Sprachwissenschaft möglich. Ideal für eine wissenschaftliche Laufbahn.
              </p>
              <div className="mt-auto flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Zum M.A. Studium <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>

            {/* M.Ed. Tile */}
            <Link to="#" className="bg-white p-6 rounded shadow-sm hover:shadow-lg transition group border-t-4 border-rub-blue flex flex-col h-full">
              <h3 className="text-xl font-bold text-rub-blue mb-3 group-hover:text-rub-green transition">Master of Education (M.Ed.)</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                Vorbereitung auf das Lehramt an Gymnasien und Gesamtschulen. Fachdidaktik und schulpraktische Studien stehen hier im Fokus.
              </p>
              <div className="mt-auto flex items-center text-rub-blue text-sm font-bold group-hover:translate-x-1 transition">
                Zum Lehramtsstudium <ArrowRight size={16} className="ml-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* Sprachen Section with Tiles */}
        <div>
          <h2 className="text-2xl font-bold text-rub-blue mb-8 flex items-center gap-2 border-b border-gray-200 pb-2">
            <Languages className="text-rub-green" /> Unsere Sprachen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Französisch */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-rub-blue transition group">
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Französisch</h3>
              <p className="text-gray-600 text-sm mb-4">
                Eine Weltsprache mit reicher literarischer Tradition. Studium der Sprach-, Literatur- und Kulturwissenschaft.
              </p>
              <Link to="#" className="text-rub-blue font-bold text-sm hover:underline flex items-center">
                Mehr erfahren <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Italienisch */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-rub-blue transition group">
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Italienisch</h3>
              <p className="text-gray-600 text-sm mb-4">
                Die Sprache der Musik, Kunst und Kultur. Vertiefung in italienische Philologie und Kulturgeschichte.
              </p>
              <Link to="#" className="text-rub-blue font-bold text-sm hover:underline flex items-center">
                Mehr erfahren <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Spanisch */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-rub-blue transition group">
              <h3 className="text-xl font-bold text-rub-blue mb-2 group-hover:text-rub-green transition">Spanisch</h3>
              <p className="text-gray-600 text-sm mb-4">
                Eine der meistgesprochenen Sprachen der Welt. Hispanistik mit Fokus auf Spanien und Lateinamerika.
              </p>
              <Link to="#" className="text-rub-blue font-bold text-sm hover:underline flex items-center">
                Mehr erfahren <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
            
            {/* Weitere Sprachen */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 md:col-span-2 lg:col-span-3">
              <h4 className="font-bold text-rub-blue mb-3">Weitere Sprachangebote</h4>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white px-4 py-2 rounded shadow-sm text-sm font-medium text-gray-700 border border-gray-200">Katalanisch</span>
                <span className="bg-white px-4 py-2 rounded shadow-sm text-sm font-medium text-gray-700 border border-gray-200">Portugiesisch</span>
                <span className="bg-white px-4 py-2 rounded shadow-sm text-sm font-medium text-gray-700 border border-gray-200">Rumänisch (Komparatistik)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-rub-blue mb-4">Beratung & Kontakt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Haben Sie Fragen zum Studium? Unsere Studienfachberatung steht Ihnen gerne zur Verfügung.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/kontakt" className="bg-rub-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-rub-blue transition">
              Kontakt aufnehmen
            </Link>
            <a href="#" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
              FAQ lesen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studium;
