import React, { useState } from 'react';
import { Mail, Phone, Search, User } from 'lucide-react';

// Data based on search results
const staffData = [
  // Professors
  { name: "Prof. Dr. Roger Friedlein", role: "Professor", dept: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/150", phone: "0234 32-22624", email: "roger.friedlein@rub.de", group: "Professuren" },
  { name: "Prof. Dr. Susanne A. Friede", role: "Professorin", dept: "Französische Literaturwissenschaft", room: "GB 7/37", phone: "0234 32-22631", email: "susanne.friede@rub.de", group: "Professuren" },
  { name: "Prof. Dr. Sara Matrisciano-Mayerhofer", role: "Professorin", dept: "Französische und italienische Sprachwissenschaft", room: "GB 7/31", phone: "0234 32-28630", email: "sara.matrisciano-mayerhofer@rub.de", group: "Professuren" },
  { name: "Prof. Dr. Christian Grünnagel", role: "Professor", dept: "Literaturwissenschaft und Didaktik der romanischen Literaturen", room: "GB 7/154", phone: "0234 32-25038", email: "christian.gruennagel@rub.de", group: "Professuren" },
  { name: "Prof. Dr. David Nelting", role: "Professor", dept: "Italienische Literaturwissenschaft", room: "GB 7/53", phone: "0234 32-25036", email: "david.nelting@rub.de", group: "Professuren" },
  { name: "Prof. Dr. Laura Morgenthaler-García", role: "Professorin", dept: "Iberoromanische Sprachwissenschaft", room: "GB 7/143", phone: "0234 32-22523", email: "laura.morgenthaler@rub.de", group: "Professuren" },
  { name: "Jun.-Prof. Dr. Jasmin Wrobel", role: "Juniorprofessorin", dept: "Romanisches Seminar", room: "GB 7/51", phone: "0234 32-22524", email: "jasmin.wrobel@rub.de", group: "Professuren" },
  
  // PDs
  { name: "PD Dr. Bettina Full", role: "Privatdozentin", dept: "Romanisches Seminar", room: "GB 7/129", phone: "0234 32-18557", email: "bettina.full@rub.de", group: "Privatdozenten" },

  // WiMis
  { name: "Dr. Gerardo Álvarez García", role: "Wiss. Mitarbeiter", dept: "Romanisches Seminar", room: "GB 7/145", phone: "0234 32-22174", email: "gerardo.alvarezgarcia@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Ignacio Andrés Soria", role: "Wiss. Mitarbeiter", dept: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632", email: "ignacio.andressoria@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Katrin Bohnenkamp", role: "Wiss. Mitarbeiterin", dept: "Französische und italienische Sprachwissenschaft", room: "GB 7/29", phone: "0234 32-15725", email: "katrin.bohnenkamp@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Dirk Brunke", role: "Wiss. Mitarbeiter", dept: "Romanisches Seminar", room: "GB 7/148", phone: "0234 32-28045", email: "dirk.brunke@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Alejandro Cantarero de Salazar", role: "Wiss. Mitarbeiter", dept: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/155", phone: "", email: "alejandro.cantarero@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Alessio Augusto Chinellato Diáz", role: "Wiss. Mitarbeiter", dept: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632", email: "alessio.chinellato@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Sandra Issel-Dombert", role: "Wiss. Mitarbeiterin", dept: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632", email: "sandra.issel-dombert@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Isabella Müller-Turek", role: "Wiss. Mitarbeiterin", dept: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/151", phone: "0234 32-21384", email: "isabella.mueller-turek@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Felix Nickel-Holze", role: "Wiss. Mitarbeiter", dept: "Literaturwissenschaft und Didaktik", room: "GB 7/153", phone: "0234 32-21920", email: "felix.nickel@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Philip Oppenländer", role: "Wiss. Mitarbeiter", dept: "Französische und italienische Sprachwissenschaft", room: "GB 7/29", phone: "0234 32-22637", email: "philip.oppenlaender@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Ilaria Paltrinieri", role: "Wiss. Mitarbeiterin", dept: "Italienische Literaturwissenschaft", room: "GB 7/155", phone: "0234 32-25077", email: "ilaria.paltrinieri@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Katharina Pohl", role: "Wiss. Mitarbeiterin", dept: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/147", phone: "0234 32-15728", email: "katharina.pohl@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Marc Schäfer", role: "Wiss. Mitarbeiter", dept: "Französische Literaturwissenschaft", room: "GB 7/36", phone: "0234 32-15714", email: "marc.schaefer@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Michael Schmitz", role: "Wiss. Mitarbeiter", dept: "Iberoromanische Sprachwissenschaft", room: "GB 7/139", phone: "0234 32-22632", email: "michael.schmitz@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Eva-Verena Siebenborn", role: "Wiss. Mitarbeiterin", dept: "Romanisches Seminar", room: "GB 7/158", phone: "0234 32-23386", email: "eva-verena.siebenborn@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },
  { name: "Dr. Rosemary Snelling-Gögh", role: "Wiss. Mitarbeiterin", dept: "Italienische Literaturwissenschaft", room: "GB 7/55", phone: "0234 32-22692", email: "rosemary.snelling@rub.de", group: "Wissenschaftliche Mitarbeiter*innen" },

  // LfbA
  { name: "Carmen Cárdenas Fernández", role: "LfbA", dept: "Fremdsprachenausbildung Spanisch", room: "GB 7/146", phone: "0234 32-25037", email: "carmen.cardenas@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Carol Ciarli", role: "LfbA", dept: "Fremdsprachenausbildung Italienisch", room: "GB 7/52", phone: "0234 32-25043", email: "carol.ciarli@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Antonia Cordero López", role: "LfbA", dept: "Fremdsprachenausbildung Spanisch", room: "GB 7/146", phone: "0234 32-25037", email: "antonia.cordero@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Dr. Irene Gallerani", role: "LfbA", dept: "Fremdsprachenausbildung Italienisch", room: "GB 7/52", phone: "0234 32-25043", email: "irene.gallerani@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Bernd Gosemärker", role: "LfbA", dept: "Fremdsprachenausbildung Spanisch", room: "GB 7/52", phone: "0234 32-24108", email: "bernd.gosemaerker@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Anne-Marie Hussein", role: "LfbA", dept: "Fremdsprachenausbildung Französisch", room: "GB 7/58", phone: "0234 32-25040", email: "anne-marie.hussein@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Dr. Marcos Machado Nunes", role: "LfbA", dept: "Romanisches Seminar", room: "GB 7/148", phone: "0234 32-28045", email: "marcos.machado@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Imma Martí Esteve", role: "LfbA", dept: "Iberoromanische Literatur- und Kulturwissenschaft", room: "GB 7/147", phone: "0234 32-25035", email: "imma.marti@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Dr. Nathalie Piquet", role: "LfbA", dept: "Fremdsprachenausbildung Französisch", room: "GB 7/58", phone: "0234 32-25040", email: "nathalie.piquet@rub.de", group: "Lehrkräfte für besondere Aufgaben" },
  { name: "Giuseppa Sgrò-Ivančev", role: "LfbA", dept: "Romanisches Seminar", room: "GB 7/55", phone: "0234 32-22692", email: "giuseppa.sgro@rub.de", group: "Lehrkräfte für besondere Aufgaben" },

  // Admin/Secretariat
  { name: "Nadine Adams", role: "Sekretariat", dept: "Romanisches Seminar", room: "GB 7/136", phone: "0234 32-29951", email: "nadine.adams@rub.de", group: "Technik & Verwaltung" },
  { name: "Johnna Beermann", role: "Sekretariat", dept: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951", email: "johnna.beermann@rub.de", group: "Technik & Verwaltung" },
  { name: "Marie Dommasch", role: "Sekretariat", dept: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951", email: "marie.dommasch@rub.de", group: "Technik & Verwaltung" },
  { name: "Dominik Fernandes Patas", role: "Sekretariat", dept: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951", email: "dominik.fernandes@rub.de", group: "Technik & Verwaltung" },
  { name: "Alessia Franchi", role: "Sekretariat", dept: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951", email: "alessia.franchi@rub.de", group: "Technik & Verwaltung" },
  { name: "Jolina Köpcke", role: "Sekretariat", dept: "Geschäftszimmer", room: "GB 7/136", phone: "0234 32-29951", email: "jolina.koepcke@rub.de", group: "Technik & Verwaltung" },
  { name: "Alexa Lucke", role: "Sekretariat", dept: "Romanisches Seminar", room: "GB 7/136", phone: "0234 32-29951", email: "alexa.lucke@rub.de", group: "Technik & Verwaltung" },

  // Akademische Räte
  { name: "Dr. Gero Arnscheidt", role: "Akademischer Rat", dept: "Romanisches Seminar", room: "GB 7/156", phone: "0234 32-22625", email: "gero.arnscheidt@rub.de", group: "Akademische Rät*innen" },
  { name: "Dr. Christoph Groß", role: "Akademischer Rat", dept: "Französische Literaturwissenschaft", room: "GB 7/162", phone: "0234 32-25971", email: "christoph.gross@rub.de", group: "Akademische Rät*innen" },
  { name: "Dr. Isabel Müller", role: "Akademische Rätin", dept: "Romanisches Seminar", room: "GB 7/151", phone: "0234 32-22638", email: "isabel.mueller@rub.de", group: "Akademische Rät*innen" },
  
  // Others
  { name: "Dr. Judith Kittler", role: "Kustodin", dept: "Romanisches Seminar", room: "GB 7/137", phone: "0234 32-22629", email: "judith.kittler@rub.de", group: "Kustodin" },
  { name: "Dr. Daniel Kallweit", role: "Oberstudienrat i.H.", dept: "Romanisches Seminar", room: "GB 7/34", phone: "0234 32-15697", email: "daniel.kallweit@rub.de", group: "Ober-/Studienrät*innen" },
  { name: "Dr. Nelson Puccio", role: "Oberstudienrat i.H.", dept: "Romanisches Seminar", room: "GB 7/34", phone: "0234 32-25034", email: "nelson.puccio@rub.de", group: "Ober-/Studienrät*innen" },
];

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("Alle");

  const groups = ["Alle", ...new Set(staffData.map(person => person.group))];

  const filteredStaff = staffData.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          person.dept.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === "Alle" || person.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div className="pb-12">
      <section className="bg-rub-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Personen A-Z</h1>
          <p className="text-xl text-gray-200">
            Mitarbeiterinnen und Mitarbeiter des Romanischen Seminars.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Name oder Abteilung suchen..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rub-blue focus:ring-1 focus:ring-rub-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-1/3">
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-rub-blue focus:ring-1 focus:ring-rub-blue"
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                {groups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((person, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-sm border-l-4 border-rub-blue hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-full text-rub-blue">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-rub-blue text-lg">{person.name}</h3>
                  <span className="inline-block bg-blue-50 text-rub-blue text-xs px-2 py-1 rounded mt-1">{person.role}</span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium text-gray-800">{person.dept}</p>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-gray-500">Raum:</span>
                  <span>{person.room}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-gray-500">Tel:</span>
                  <span>{person.phone || "k.A."}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-16 font-semibold text-gray-500">E-Mail:</span>
                  <a href={`mailto:${person.email}`} className="text-rub-green hover:underline truncate">{person.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredStaff.length === 0 && (
           <div className="text-center py-12 text-gray-500">
             Keine Personen gefunden.
           </div>
        )}
      </section>
    </div>
  );
};

export default Staff;
