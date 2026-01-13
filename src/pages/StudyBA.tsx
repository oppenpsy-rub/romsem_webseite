import React from 'react';
import { Book, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudyBA = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Book className="text-rub-green" size={32} />
            <h1 className="text-4xl font-bold">Bachelor of Arts (B.A.)</h1>
          </div>
          <p className="text-xl text-gray-200">
            Detaillierte Informationen zum Studienverlauf und den Modulen im Bachelor-Studiengang.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            {/* Studienbeginn */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-rub-blue">
              <h2 className="text-2xl font-bold text-rub-blue mb-4">Der Studienstart</h2>
              <p className="text-gray-700 mb-4">
                Das Bachelorstudium am Romanischen Seminar ist modularisiert. Für Studienanfänger (insb. WiSe 24/25 oder SoSe 25) gelten spezifische Regeln für die ersten beiden Semester.
              </p>
              
              <div className="bg-blue-50 p-4 rounded border-l-4 border-rub-blue mb-6">
                <h3 className="font-bold text-rub-blue mb-2 flex items-center gap-2">
                  <AlertCircle size={18} /> Wichtig für das 1. Semester
                </h3>
                <p className="text-sm text-gray-700">
                  Es müssen alle Kurse aus <strong>Modul A 1.1</strong> und <strong>Modul A 1.2</strong> belegt werden.
                  Um im zweiten Semester weiterführende Kurse belegen zu können, müssen diese Grundlagenmodule bestanden sein!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-bold text-gray-900 mb-3 border-b pb-2">Modul A 1.1 (Fachwissenschaft)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-rub-green mt-1" /> Latein in der Romania</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-rub-green mt-1" /> Einführung in die Linguistik</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-rub-green mt-1" /> Einführung in die Literaturwissenschaft</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <h4 className="font-bold text-gray-900 mb-3 border-b pb-2">Modul A 1.2 (Sprachlich-methodisch)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-rub-green mt-1" /> Grundbegriffe der Grammatik</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-rub-green mt-1" /> Propädeutikum Teil A - D</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-rub-green mt-1" /> Basiskurs Morphosyntax</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Studienverlauf 2. Semester */}
            <div>
              <h2 className="text-2xl font-bold text-rub-blue mb-6">Verlauf ab dem 2. Semester</h2>
              <p className="text-gray-700 mb-4">
                Der weitere Verlauf hängt davon ab, ob Sie Ihr zweites Fachsemester im Sommer- oder Wintersemester beginnen.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded shadow-sm">
                  <h3 className="font-bold text-rub-blue text-lg mb-3 flex items-center gap-2">
                    <Clock size={18} /> Start 2. Semester im Sommer (SoSe)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Empfohlene Kurse, da Vorlesungen oft nur im SoSe angeboten werden:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Modul Sprache der Gegenwart – Vorlesung</li>
                    <li>Modul Sprache der Gegenwart – 1 Proseminar</li>
                    <li>Modul Neuere Literaturgeschichte – Vorlesung</li>
                    <li>Modul Neuere Literaturgeschichte – 1 Proseminar</li>
                    <li>Modul Fremdsprachenausbildung I – Morphosyntax A</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded shadow-sm">
                  <h3 className="font-bold text-rub-blue text-lg mb-3 flex items-center gap-2">
                    <Clock size={18} /> Start 2. Semester im Winter (WiSe)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Empfohlene Kurse für das Wintersemester:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Modul Sprachgeschichte – Vorlesung</li>
                    <li>Modul Sprachgeschichte – 1 Proseminar</li>
                    <li>Modul Ältere Literaturgeschichte – Vorlesung</li>
                    <li>Modul Ältere Literaturgeschichte – 1 Proseminar</li>
                    <li>Modul Fremdsprachenausbildung I – Morphosyntax A</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Links */}
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-rub-blue mb-4">Wichtige Dokumente</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-gray-700 hover:text-rub-blue hover:underline text-sm flex items-center gap-2">
                    <Book size={16} /> Studienordnung B.A. (PDF)
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-700 hover:text-rub-blue hover:underline text-sm flex items-center gap-2">
                    <Book size={16} /> Modulhandbuch (PDF)
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-700 hover:text-rub-blue hover:underline text-sm flex items-center gap-2">
                    <Book size={16} /> Laufzettel (PDF)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-rub-green/10 p-6 rounded-lg border border-rub-green/20">
              <h3 className="font-bold text-rub-green mb-2">Studienberatung</h3>
              <p className="text-sm text-gray-700 mb-4">
                Haben Sie Fragen zum Studienverlauf oder zur Modulwahl? Nutzen Sie unsere offene Sprechstunde.
              </p>
              <Link to="/kontakt" className="text-sm font-bold text-rub-blue hover:underline">
                Zur Kontaktseite →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StudyBA;
