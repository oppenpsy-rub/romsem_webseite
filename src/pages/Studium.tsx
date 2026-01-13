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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-rub-blue mb-6 flex items-center gap-2">
              <Languages className="text-rub-green" /> Unsere Sprachen
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-rub-green hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">Französisch</h3>
                <p className="text-gray-600 mb-3">
                  Eine Weltsprache mit reicher literarischer Tradition. Studium der Sprach-, Literatur- und Kulturwissenschaft.
                </p>
                <Link to="#" className="text-rub-blue font-semibold text-sm hover:underline">Mehr erfahren</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-rub-green hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">Italienisch</h3>
                <p className="text-gray-600 mb-3">
                  Die Sprache der Musik, Kunst und Kultur. Vertiefung in italienische Philologie.
                </p>
                <Link to="#" className="text-rub-blue font-semibold text-sm hover:underline">Mehr erfahren</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-rub-green hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">Spanisch</h3>
                <p className="text-gray-600 mb-3">
                  Eine der meistgesprochenen Sprachen der Welt. Hispanistik mit Fokus auf Spanien und Lateinamerika.
                </p>
                <Link to="#" className="text-rub-blue font-semibold text-sm hover:underline">Mehr erfahren</Link>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-rub-blue mb-2">Weitere Angebote</h4>
              <p className="text-gray-600 mb-2">
                Zusätzlich bieten wir Sprachzertifikate und Kurse in:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Katalanisch</li>
                <li>Portugiesisch</li>
                <li>Rumänisch (im Rahmen der Komparatistik)</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-rub-blue mb-6 flex items-center gap-2">
              <GraduationCap className="text-rub-green" /> Studiengänge
            </h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-rub-blue">Bachelor of Arts (B.A.)</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Der 2-Fächer-Bachelor bietet Ihnen die Möglichkeit, zwei Fächer zu kombinieren. Sie können Romanistik als eines oder beide Fächer wählen.
                  </p>
                  <ul className="space-y-2 mb-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> Basismodule Sprachpraxis</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> Einführung in die Sprach- und Literaturwissenschaft</li>
                    <li className="flex items-center gap-2"><ArrowRight size={14} className="text-rub-green" /> Vertiefungsmodule & Optionalbereich</li>
                  </ul>
                  <button className="bg-rub-blue text-white px-4 py-2 rounded text-sm hover:bg-rub-green transition">Modulhandbücher</button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-rub-blue">Master of Arts (M.A.)</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Forschungsorientierte Vertiefung der im Bachelor erworbenen Kenntnisse. Spezialisierung in Literatur- oder Sprachwissenschaft möglich.
                  </p>
                  <button className="bg-rub-blue text-white px-4 py-2 rounded text-sm hover:bg-rub-green transition">Studienverlaufsplan</button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-rub-blue">Master of Education (M.Ed.)</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Vorbereitung auf das Lehramt an Gymnasien und Gesamtschulen. Fachdidaktik und schulpraktische Studien stehen hier im Fokus.
                  </p>
                  <button className="bg-rub-blue text-white px-4 py-2 rounded text-sm hover:bg-rub-green transition">Lehramt Infos</button>
                </div>
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
