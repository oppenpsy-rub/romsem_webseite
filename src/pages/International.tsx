import React from 'react';
import { Globe, BookOpen, GraduationCap, Map, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const International = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-rub-green" size={32} />
            <h1 className="text-4xl font-bold">Internationales</h1>
          </div>
          <p className="text-xl text-gray-200">
            Das Romanische Seminar ist weltweit vernetzt. Entdecken Sie Ihre Möglichkeiten im Ausland.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-rub-green">
              <h2 className="text-2xl font-bold text-rub-blue mb-4">Weltoffen und Vernetzt</h2>
              <p className="text-gray-700 mb-4">
                Ein Auslandsaufenthalt ist für Studierende der Romanistik nicht nur eine Bereicherung, sondern ein wesentlicher Bestandteil des Studiums. Das Romanische Seminar unterhält zahlreiche Partnerschaften mit Universitäten in ganz Europa und darüber hinaus.
              </p>
              <p className="text-gray-700">
                Ob Sie in Frankreich, Italien, Spanien, Portugal oder Lateinamerika studieren möchten – wir unterstützen Sie bei der Planung und Durchführung Ihres Auslandssemesters.
              </p>
            </div>

            {/* Erasmus */}
            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 flex items-center gap-2">
                <Map size={24} /> Erasmus+ Programm
              </h2>
              <p className="text-gray-700 mb-6">
                Das Erasmus+ Programm ist der einfachste Weg ins Ausland. Sie profitieren von Studiengebührenbefreiung an der Partnerhochschule und einer monatlichen finanziellen Förderung.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-rub-blue mb-2">Frankreich & Belgien</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Université de Tours (Doppelabschluss möglich)</li>
                    <li>• Sorbonne Université, Paris</li>
                    <li>• Université de Liège (Belgien)</li>
                    <li>• Université de Toulouse</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-rub-blue mb-2">Spanien & Portugal</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Universidad de Oviedo (Doppelabschluss möglich)</li>
                    <li>• Universidad de Salamanca</li>
                    <li>• Universidade de Coimbra (Portugal)</li>
                    <li>• Universidade de Lisboa (Portugal)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-bold text-rub-blue mb-2">Italien</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Università di Bologna</li>
                    <li>• Università di Roma La Sapienza</li>
                    <li>• Università degli Studi di Firenze</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                  <Link to="#" className="text-rub-blue font-bold hover:underline">
                    Alle Partneruniversitäten ansehen →
                  </Link>
                </div>
              </div>
            </div>

            {/* Double Degree */}
            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 flex items-center gap-2">
                <GraduationCap size={24} /> Doppelabschlüsse
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  Besonders hervorzuheben sind unsere Doppelabschluss-Programme. Hier erwerben Sie gleichzeitig einen Abschluss der RUB und der Partneruniversität.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-rub-blue text-white p-2 rounded shrink-0">FR</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Bochum – Tours</h4>
                      <p className="text-sm text-gray-600">In Kooperation mit der Université de Tours. Integrierter Studienverlauf über mehrere Semester.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-rub-green text-white p-2 rounded shrink-0">ES</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Bochum – Oviedo</h4>
                      <p className="text-sm text-gray-600">In Kooperation mit der Universidad de Oviedo. Einzigartige Möglichkeit für Spanisch-Studierende.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-rub-blue mb-4 flex items-center gap-2">
                <Users size={18} /> Ansprechpersonen
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Erasmus-Koordination</p>
                  <p className="text-sm text-gray-700">Dr. Gero Arnscheidt</p>
                  <p className="text-sm text-gray-600">Raum GB 7/156</p>
                  <a href="mailto:gero.arnscheidt@rub.de" className="text-sm text-rub-blue hover:underline">gero.arnscheidt@rub.de</a>
                </div>
                <hr className="border-gray-300" />
                <div>
                  <p className="font-semibold text-gray-900">Beratung Spanien</p>
                  <p className="text-sm text-gray-700">Katharina Pohl</p>
                  <p className="text-sm text-gray-600">Raum GB 7/147</p>
                  <a href="mailto:katharina.pohl@rub.de" className="text-sm text-rub-blue hover:underline">katharina.pohl@rub.de</a>
                </div>
              </div>
            </div>

            <div className="bg-rub-blue text-white p-6 rounded-lg">
              <h3 className="font-bold mb-4">Nächste Termine</h3>
              <div className="space-y-4">
                <div className="pb-3 border-b border-white/20">
                  <p className="text-rub-green font-bold text-sm">14.12.2025</p>
                  <p className="font-semibold">Info-Veranstaltung Erasmus</p>
                  <p className="text-sm text-gray-300">16:00 - 18:00 Uhr, HGB 50</p>
                </div>
                <div>
                  <p className="text-rub-green font-bold text-sm">31.01.2026</p>
                  <p className="font-semibold">Bewerbungsfrist Erasmus</p>
                  <p className="text-sm text-gray-300">Für das akademische Jahr 26/27</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-rub-blue mb-2">Downloads</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-rub-blue">
                    <BookOpen size={14} /> Bewerbungsleitfaden (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-rub-blue">
                    <BookOpen size={14} /> Learning Agreement (PDF)
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-rub-blue">
                    <BookOpen size={14} /> Anerkennungsformular (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default International;
