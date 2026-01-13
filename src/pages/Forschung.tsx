import React from 'react';
import { BookOpen, Globe, Archive, Award } from 'lucide-react';

const Forschung = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Forschung</h1>
          <p className="text-xl text-gray-200">
            Spitzenforschung in den Bereichen Literatur-, Kultur- und Sprachwissenschaft.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <div className="mb-12">
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
                Die Forschung am Romanischen Seminar zeichnet sich durch eine breite thematische Vielfalt aus, die von der mittelalterlichen Literatur bis zur Gegenwartskultur und von der historischen Sprachwissenschaft bis zur Soziolinguistik reicht.
              </p>
            </div>

            {/* Forschungsprojekte */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-rub-blue mb-8 border-b border-gray-200 pb-2">Aktuelle Forschungsprojekte</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded shadow-sm border-t-4 border-rub-blue hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-rub-blue mb-3">Spanisch als Herkunftssprache</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Das Projekt untersucht die Bedeutung und Praxis des Spanischunterrichts im Rahmen des Herkunftssprachlichen Unterrichts (HSU) in NRW. Ziel ist es, Studierenden und Lehrenden fundiertes Wissen über Mehrsprachigkeit zu vermitteln.
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Didaktik / Soziolinguistik</span>
                </div>
                
                <div className="bg-white p-6 rounded shadow-sm border-t-4 border-rub-blue hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-rub-blue mb-3">Cálculo y error: recontando a Calderón</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Forschung im Rahmen des XX. Anglogermanischen Kolloquiums zu Calderón. Analyse von Rechenfehlern und Irrtümern in den Werken des spanischen Dramatikers Pedro Calderón de la Barca.
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Literaturwissenschaft</span>
                </div>

                <div className="bg-white p-6 rounded shadow-sm border-t-4 border-rub-blue hover:shadow-lg transition">
                   <h3 className="text-xl font-bold text-rub-blue mb-3">Alfried-Krupp-Schülerlabor</h3>
                   <p className="text-gray-600 text-sm mb-4">
                     Regelmäßige Projekte an der Schnittstelle von Schule und Universität. Schülerinnen und Schüler forschen zu sprach- und literaturwissenschaftlichen Themen.
                   </p>
                   <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Transfer / Nachwuchsförderung</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Zeitschriften & Publikationen</h2>
              <p className="text-gray-600 mb-6">
                Das Romanische Seminar ist maßgeblich an der Herausgabe renommierter Fachzeitschriften beteiligt. 
                Hier finden Sie eine Übersicht unserer wichtigsten Publikationsorgane.
              </p>
              
              <div className="space-y-6">
                {/* Journal 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 bg-gray-100 flex items-center justify-center text-rub-blue font-bold text-xl shrink-0 rounded">
                    HeLix
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rub-blue mb-2">HeLix – Dossiers zur romanischen Literaturwissenschaft</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Eine gesamtromanistische Online-Zeitschrift, die Beiträge zu literatur- und kulturwissenschaftlichen Themen versammelt. 
                      HeLix ist Peer-Reviewed und Open Access.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-rub-green text-sm font-bold hover:underline">Zur Zeitschrift</a>
                      <a href="#" className="text-gray-500 text-sm hover:text-rub-blue">Aktuelles Heft</a>
                    </div>
                  </div>
                </div>

                {/* Journal 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 bg-gray-100 flex items-center justify-center text-rub-blue font-bold text-xl shrink-0 rounded text-center p-2">
                    LJB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rub-blue mb-2">Literaturwissenschaftliches Jahrbuch</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Herausgegeben im Auftrag der Görres-Gesellschaft. Das Jahrbuch bietet einen Überblick über neue Forschungsergebnisse 
                      in der Germanistik, Anglistik und Romanistik. Mitherausgeberin: Prof. Dr. Susanne A. Friede.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-rub-green text-sm font-bold hover:underline">Webseite des Verlags</a>
                    </div>
                  </div>
                </div>

                {/* Journal 3 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-32 h-32 bg-gray-100 flex items-center justify-center text-rub-blue font-bold text-xl shrink-0 rounded">
                    metaphorik
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-rub-blue mb-2">metaphorik.de</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Online-Zeitschrift zur Metaphorik und Metonymie. Forum für die Diskussion theoretischer und empirischer Fragen 
                      der Bildsprache in Sprache, Literatur und Medien.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="text-rub-green text-sm font-bold hover:underline">Zur Zeitschrift</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-rub-blue mb-4 flex items-center gap-2">
                <Award className="text-rub-green" /> Publikationen
              </h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-100 last:border-0">
                  <span className="text-xs font-bold text-gray-500 uppercase">Neuerscheinung</span>
                  <p className="font-medium text-rub-blue mt-1">Handbuch der spanischen Sprachwissenschaft</p>
                  <p className="text-sm text-gray-600">Prof. Dr. M. Mustermann (Hrsg.)</p>
                </li>
                <li className="pb-4 border-b border-gray-100 last:border-0">
                  <span className="text-xs font-bold text-gray-500 uppercase">Artikel</span>
                  <p className="font-medium text-rub-blue mt-1">Digital Humanities in der Romanistik</p>
                  <p className="text-sm text-gray-600">Zeitschrift für Romanische Philologie</p>
                </li>
              </ul>
              <button className="w-full mt-6 bg-rub-blue text-white py-2 rounded hover:bg-rub-green transition">
                Alle Publikationen
              </button>
            </div>

            <div className="bg-rub-blue text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Promotion</h3>
              <p className="mb-4 text-gray-200">
                Interessieren Sie sich für eine Promotion am Romanischen Seminar? Hier finden Sie Informationen zu Voraussetzungen und Betreuung.
              </p>
              <button className="w-full bg-white text-rub-blue py-2 rounded font-semibold hover:bg-gray-100 transition">
                Infos zur Promotion
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forschung;
