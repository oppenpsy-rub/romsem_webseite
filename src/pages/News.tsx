import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: "Infoveranstaltung zum Erasmus-Programm 2026/2027",
    date: "12.01.2026",
    category: "Studium",
    excerpt: "Das Romanische Seminar lädt alle interessierten Studierenden herzlich zur Infoveranstaltung über das Erasmus-Programm ein.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Projekt „Spanisch als Herkunftssprache an der RUB“",
    date: "10.01.2026",
    category: "Forschung",
    excerpt: "Neues Forschungsprojekt untersucht die Bedeutung und Praxis des Spanischunterrichts im Rahmen des Herkunftssprachlichen Unterrichts.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Anmeldung zu den Sprachkursen",
    date: "05.01.2026",
    category: "Lehre",
    excerpt: "Die Anmeldung für die Sprachkurse im kommenden Semester ist ab sofort über eCampus möglich.",
    image: "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Gastvortrag: Literatur der Romantik",
    date: "15.12.2025",
    category: "Veranstaltung",
    excerpt: "Prof. Dr. Müller von der Universität Sorbonne hält einen Gastvortrag zur französischen Romantik.",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const News = () => {
  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Aktuelles</h1>
          <p className="text-xl text-gray-200">
            Neuigkeiten, Termine und Veranstaltungen aus dem Romanischen Seminar.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden flex flex-col md:flex-row h-full md:h-64">
              <div className="md:w-2/5 h-48 md:h-full bg-gray-200 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-rub-green uppercase tracking-wider">{item.category}</span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Calendar size={12} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-rub-blue mb-2 leading-tight hover:text-rub-green transition">
                    <Link to="#">{item.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
                <div className="mt-4">
                  <Link to="#" className="text-rub-blue text-sm font-semibold hover:underline flex items-center gap-1">
                    Weiterlesen <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="border border-rub-blue text-rub-blue px-6 py-2 rounded hover:bg-rub-blue hover:text-white transition">
            Ältere Beiträge laden
          </button>
        </div>
      </section>
    </div>
  );
};

export default News;
