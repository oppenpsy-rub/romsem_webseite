import React from 'react';
import { Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: "20.09.2024",
      title: "XX Coloquio Anglogermano sobre Calderón",
      category: "Konferenz",
      excerpt: "Vom 18. bis 21. September 2024 findet das 20. Anglogermanische Kolloquium zu Calderón statt. Thema: «Cálculo y error: recontando a Calderón». Organisiert von Prof. Dr. Roger Friedlein.",
      link: "#"
    },
    {
      id: 2,
      date: "15.08.2024",
      title: "Neuer Double Degree mit La Réunion",
      category: "Studium",
      excerpt: "Ab sofort können sich Studierende für den neuen Doppelabschluss „Franko-Germanistische Studien“ bewerben. Ein Semester auf der Insel La Réunion inklusive!",
      link: "/internationales"
    },
    {
      id: 3,
      date: "01.07.2024",
      title: "Erscheinen der neuen HeLix-Ausgabe",
      category: "Publikation",
      excerpt: "Die neue Ausgabe der Online-Zeitschrift HeLix ist erschienen. Schwerpunkt: 'Digitale Philologie in der Romanistik'.",
      link: "#"
    },
    {
      id: 4,
      date: "10.06.2024",
      title: "Gastvortrag: Italienische Literatur der Gegenwart",
      category: "Veranstaltung",
      excerpt: "Am kommenden Dienstag begrüßen wir Dr. Maria Rossi von der Universität Bologna zu einem Gastvortrag im Blue Square.",
      link: "#"
    },
    {
      id: 5,
      date: "20.05.2024",
      title: "Anmeldung zu den Sprachkursen",
      category: "Studium",
      excerpt: "Die Anmeldung für die Sprachkurse im kommenden Semester ist ab sofort über eCampus möglich. Bitte beachten Sie die Fristen.",
      link: "#"
    },
    {
      id: 6,
      date: "05.04.2024",
      title: "Forschungsprojekt 'Spanisch als Herkunftssprache'",
      category: "Forschung",
      excerpt: "Das Projekt startet in die zweite Phase. Gesucht werden noch Teilnehmer für die Datenerhebung an Schulen in NRW.",
      link: "/forschung"
    }
  ];

  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Aktuelles</h1>
          <p className="text-xl text-gray-200">
            Neuigkeiten, Veranstaltungen und Termine aus dem Romanischen Seminar.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition group">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </span>
                  <span className="bg-gray-100 text-rub-blue text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-rub-blue mb-3 group-hover:text-rub-green transition">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {item.excerpt}
                </p>
                
                <Link to={item.link} className="inline-flex items-center text-rub-blue font-bold text-sm hover:underline mt-auto">
                  Weiterlesen <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border border-gray-300 text-gray-600 px-6 py-3 rounded hover:bg-gray-50 transition">
            Ältere Beiträge laden
          </button>
        </div>
      </section>
    </div>
  );
};

export default News;
