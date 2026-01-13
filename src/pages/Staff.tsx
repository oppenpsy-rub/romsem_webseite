import React, { useState } from 'react';
import { Mail, Phone, MapPin, Search } from 'lucide-react';

type StaffMember = {
  name: string;
  role: string;
  room?: string;
  phone?: string;
  email?: string;
  area?: string;
};

const staffData: Record<string, StaffMember[]> = {
  "Professuren": [
    { name: "Prof. Dr. Susanne A. Friede", role: "Universitätsprofessorin", area: "Französische Literaturwissenschaft", room: "GB 7/37", phone: "0234 32-22631" },
    { name: "Prof. Dr. Roger Friedlein", role: "Universitätsprofessor", area: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/150", phone: "0234 32-22624" },
    { name: "Prof. Dr. Christian Grünnagel", role: "Universitätsprofessor", area: "Literaturwissenschaft und Didaktik der romanischen Literaturen", room: "GB 7/154", phone: "0234 32-25038" },
    { name: "Prof. Dr. Sara Matrisciano-Mayerhofer", role: "Universitätsprofessorin", area: "Französische und italienische Sprachwissenschaft", room: "GB 7/31", phone: "0234 32-28630" },
    { name: "Prof. Dr. Laura Morgenthaler-García", role: "Universitätsprofessorin", area: "Iberoromanische Sprachwissenschaft", room: "GB 7/143", phone: "0234 32-22523" },
    { name: "Prof. Dr. David Nelting", role: "Universitätsprofessor", area: "Italienische Literaturwissenschaft", room: "GB 7/53", phone: "0234 32-25036" },
    { name: "Jun.-Prof. Dr. Jasmin Wrobel", role: "Juniorprofessorin", area: "Romanisches Seminar", room: "GB 7/51", phone: "0234 32-22524" },
  ],
  "Wissenschaftliche Mitarbeiter*innen": [
    { name: "Dr. Gerardo Álvarez García", role: "Wiss. Mitarbeiter", area: "Romanisches Seminar", room: "GB 7/145", phone: "0234 32-22174" },
    { name: "Ignacio Andrés Soria", role: "Wiss. Mitarbeiter", area: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632" },
    { name: "Katrin Bohnenkamp", role: "Wiss. Mitarbeiterin", area: "Französische und italienische Sprachwissenschaft", room: "GB 7/29", phone: "0234 32-15725" },
    { name: "Dr. Dirk Brunke", role: "Wiss. Mitarbeiter", area: "Romanisches Seminar", room: "GB 7/148", phone: "0234 32-28045" },
    { name: "Dr. Alejandro Cantarero de Salazar", role: "Wiss. Mitarbeiter", area: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/155" },
    { name: "Alessio Augusto Chinellato Diáz", role: "Wiss. Mitarbeiter", area: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632" },
    { name: "Dr. Sandra Issel-Dombert", role: "Wiss. Mitarbeiterin", area: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632" },
    { name: "Isabella Müller-Turek", role: "Wiss. Mitarbeiterin", area: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/151", phone: "0234 32-21384" },
    { name: "Felix Nickel-Holze", role: "Wiss. Mitarbeiter", area: "Literaturwissenschaft und Didaktik", room: "GB 7/153", phone: "0234 32-21920" },
    { name: "Philip Oppenländer", role: "Wiss. Mitarbeiter", area: "Französische und italienische Sprachwissenschaft", room: "GB 7/29", phone: "0234 32-22637" },
    { name: "Ilaria Paltrinieri", role: "Wiss. Mitarbeiterin", area: "Italienische Literaturwissenschaft", room: "GB 7/155", phone: "0234 32-25077" },
    { name: "Katharina Pohl", role: "Wiss. Mitarbeiterin", area: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/147", phone: "0234 32-15728" },
    { name: "Dr. Marc Schäfer", role: "Wiss. Mitarbeiter", area: "Französische Literaturwissenschaft", room: "GB 7/36", phone: "0234 32-15714" },
    { name: "Dr. Michael Schmitz", role: "Wiss. Mitarbeiter", area: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632" },
    { name: "Dr. Eva-Verena Siebenborn", role: "Wiss. Mitarbeiterin", area: "Romanisches Seminar", room: "GB 7/158", phone: "0234 32-23386" },
    { name: "Dr. Rosemary Snelling-Gögh", role: "Wiss. Mitarbeiterin", area: "Italienische Literaturwissenschaft", room: "GB 7/55", phone: "0234 32-22692" },
  ],
  "Lehrkräfte für besondere Aufgaben": [
    { name: "Carmen Cárdenas Fernández", role: "LfbA", area: "Fremdsprachenausbildung Spanisch", room: "GB 7/146", phone: "0234 32-25037" },
    { name: "Carol Ciarli", role: "LfbA", area: "Fremdsprachenausbildung Italienisch", room: "GB 7/52", phone: "0234 32-25043" },
    { name: "Antonia Cordero López", role: "LfbA", area: "Fremdsprachenausbildung Spanisch", room: "GB 7/146", phone: "0234 32-25037" },
    { name: "Dr. Irene Gallerani", role: "LfbA", area: "Fremdsprachenausbildung Italienisch", room: "GB 7/52", phone: "0234 32-25043" },
    { name: "Bernd Gosemärker", role: "LfbA", area: "Fremdsprachenausbildung Spanisch", room: "GB 7/52", phone: "0234 32-24108" },
    { name: "Anne-Marie Hussein", role: "LfbA", area: "Fremdsprachenausbildung Französisch", room: "GB 7/58", phone: "0234 32-25040" },
    { name: "Dr. Marcos Machado Nunes", role: "LfbA", area: "Romanisches Seminar", room: "GB 7/148", phone: "0234 32-28045" },
    { name: "Imma Martí Esteve", role: "LfbA", area: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/147", phone: "0234 32-25035" },
    { name: "Dr. Nathalie Piquet", role: "LfbA", area: "Fremdsprachenausbildung Französisch", room: "GB 7/58", phone: "0234 32-25040" },
    { name: "Giuseppa Sgrò-Ivančev", role: "LfbA", area: "Romanisches Seminar", room: "GB 7/55", phone: "0234 32-22692" },
  ],
  "Akademische Rät*innen & Kustodin": [
    { name: "Dr. Gero Arnscheidt", role: "Akademischer Rat", area: "Romanisches Seminar", room: "GB 7/156", phone: "0234 32-22625" },
    { name: "Dr. Christoph Groß", role: "Akademischer Rat", area: "Französische Literaturwissenschaft", room: "GB 7/162", phone: "0234 32-25971" },
    { name: "Dr. Isabel Müller", role: "Akademische Rätin", area: "Romanisches Seminar", room: "GB 7/151", phone: "0234 32-22638" },
    { name: "Dr. Judith Kittler", role: "Kustodin", area: "Romanisches Seminar", room: "GB 7/137", phone: "0234 32-22629" },
  ],
  "Sekretariat & Verwaltung": [
    { name: "Nadine Adams", role: "Verwaltung", area: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951" },
    { name: "Johnna Beermann", role: "Verwaltung", area: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951" },
    { name: "Marie Dommasch", role: "Verwaltung", area: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951" },
    { name: "Dominik Fernandes Patas", role: "Verwaltung", area: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951" },
    { name: "Alessia Franchi", role: "Verwaltung", area: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951" },
    { name: "Jolina Köpcke", role: "Verwaltung", area: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951" },
  ]
};

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterStaff = (staffList: StaffMember[]) => {
    if (!searchTerm) return staffList;
    return staffList.filter(person => 
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      person.area?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="pb-12 bg-gray-50 min-h-screen">
      <section className="bg-rub-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Personen</h1>
          <p className="text-xl text-gray-200">
            Mitarbeiterinnen und Mitarbeiter des Romanischen Seminars.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Suchen Sie nach Namen oder Fachbereichen..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rub-blue"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(staffData).map(([category, staff]) => {
            const filteredStaff = filterStaff(staff);
            if (filteredStaff.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold text-rub-blue mb-6 border-b-2 border-rub-green pb-2 inline-block">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStaff.map((person, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border-l-4 border-rub-blue">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{person.name}</h3>
                      <p className="text-rub-blue text-sm font-medium mb-3">{person.role}</p>
                      
                      {person.area && (
                        <p className="text-gray-600 text-sm mb-4 italic">{person.area}</p>
                      )}
                      
                      <div className="space-y-2 text-sm text-gray-700 mt-auto">
                        {person.room && (
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-rub-green" />
                            <span>Raum: {person.room}</span>
                          </div>
                        )}
                        {person.phone && (
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-rub-green" />
                            <span>{person.phone}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-rub-green" />
                          <a href="#" className="hover:text-rub-blue hover:underline">E-Mail schreiben</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Staff;
