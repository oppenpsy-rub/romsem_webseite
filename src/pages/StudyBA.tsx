import React from 'react';
import { Book, FileText, CheckCircle, Download, ArrowRight } from 'lucide-react';

const StudyBA = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="bg-rub-green text-white text-xs font-bold px-2 py-1 rounded uppercase mb-2 inline-block">Bachelor of Arts</span>
              <h1 className="text-4xl font-bold mb-2">2-Fächer-Bachelor</h1>
              <p className="text-xl text-gray-200">
                Romanische Philologie als eines von zwei Fächern studieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Studieninhalt</h2>
              <p className="text-gray-600 mb-4">
                Der Bachelor-Studiengang vermittelt grundlegende Kenntnisse in der Sprach-, Literatur- und Kulturwissenschaft einer oder mehrerer romanischer Sprachen (Französisch, Italienisch, Spanisch). 
                Er qualifiziert für Berufsfelder, in denen sprachliche und interkulturelle Kompetenzen gefragt sind, sowie für weiterführende Masterstudiengänge.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rub-green">
                <h3 className="font-bold text-gray-800 mb-2">Wahlmöglichkeiten</h3>
                <p className="text-gray-600 text-sm">
                  Studierende können sich auf eine Sprache fokussieren oder zwei romanische Sprachen kombinieren. Der Studiengang ist modular aufgebaut und umfasst Basismodule, Aufbaumodule und Vertiefungsmodule.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Modulübersicht</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded p-4 hover:border-rub-blue transition">
                  <h3 className="font-bold text-rub-blue flex items-center gap-2">
                    <CheckCircle size={18} className="text-rub-green" /> Basismodule
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 ml-6">
                    Einführung in die Sprachwissenschaft, Einführung in die Literaturwissenschaft, Sprachpraxis I & II.
                  </p>
                </div>
                <div className="border border-gray-200 rounded p-4 hover:border-rub-blue transition">
                  <h3 className="font-bold text-rub-blue flex items-center gap-2">
                    <CheckCircle size={18} className="text-rub-green" /> Aufbaumodule
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 ml-6">
                    Vertiefung der Literatur- und Sprachgeschichte, Kulturwissenschaftliche Aspekte, Sprachpraxis III.
                  </p>
                </div>
                <div className="border border-gray-200 rounded p-4 hover:border-rub-blue transition">
                  <h3 className="font-bold text-rub-blue flex items-center gap-2">
                    <CheckCircle size={18} className="text-rub-green" /> Optionalbereich
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 ml-6">
                    Praktika, weitere Fremdsprachen, interdisziplinäre Module.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b border-gray-200 pb-2">Dokumente & Downloads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded hover:bg-gray-50 transition group">
                  <FileText className="text-gray-400 group-hover:text-rub-blue" size={24} />
                  <div>
                    <span className="block font-bold text-gray-700 group-hover:text-rub-blue">Prüfungsordnung (PO)</span>
                    <span className="text-xs text-gray-500">PDF, 250 KB</span>
                  </div>
                  <Download className="ml-auto text-gray-300 group-hover:text-rub-green" size={18} />
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded hover:bg-gray-50 transition group">
                  <Book className="text-gray-400 group-hover:text-rub-blue" size={24} />
                  <div>
                    <span className="block font-bold text-gray-700 group-hover:text-rub-blue">Modulhandbuch</span>
                    <span className="text-xs text-gray-500">PDF, 1.2 MB</span>
                  </div>
                  <Download className="ml-auto text-gray-300 group-hover:text-rub-green" size={18} />
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded hover:bg-gray-50 transition group">
                  <FileText className="text-gray-400 group-hover:text-rub-blue" size={24} />
                  <div>
                    <span className="block font-bold text-gray-700 group-hover:text-rub-blue">Studienverlaufsplan</span>
                    <span className="text-xs text-gray-500">PDF, 150 KB</span>
                  </div>
                  <Download className="ml-auto text-gray-300 group-hover:text-rub-green" size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-rub-blue mb-4">Studienfachberatung</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">Allgemeine Beratung</p>
                  <a href="mailto:studienberatung-romanistik@rub.de" className="text-rub-green hover:underline">studienberatung-romanistik@rub.de</a>
                </div>
                <div>
                  <p className="font-semibold">Sprechstunden</p>
                  <p className="text-gray-600">Mo 10-12 Uhr, Do 14-16 Uhr</p>
                  <p className="text-gray-600">Raum GB 7/34</p>
                </div>
              </div>
            </div>

            <div className="bg-rub-blue text-white p-6 rounded-lg">
              <h3 className="font-bold mb-4">Bewerbung</h3>
              <p className="text-sm mb-4">
                Die Einschreibung erfolgt zentral über das Studierendensekretariat der RUB. Bitte beachten Sie die Fristen.
              </p>
              <a href="#" className="inline-block bg-rub-green text-white px-4 py-2 rounded text-sm font-bold hover:bg-white hover:text-rub-green transition">
                Zur Online-Einschreibung
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StudyBA;
