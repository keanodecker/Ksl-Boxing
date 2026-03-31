'use client';

import { motion } from 'framer-motion';
import NewsCard from '@/components/NewsCard';

export default function NewsPage() {
  const newsArticles = [
    {
      title: 'Erfolgreicher Saisonstart der Wettkampfmannschaft',
      date: '15. März 2026',
      author: 'Thomas Müller',
      preview: 'Unsere Wettkampfmannschaft startet mit beeindruckenden Siegen in die neue Saison. Drei unserer Athleten konnten ihre Kämpfe für sich entscheiden und zeigten hervorragende Leistungen im Ring.',
      link: '/news'
    },
    {
      title: 'Neue Trainingszeiten für Fitness-Boxen',
      date: '10. März 2026',
      author: 'Sarah Schmidt',
      preview: 'Ab April bieten wir zusätzliche Trainingszeiten für Fitness-Boxen an. Jetzt auch mittwochs um 19:00 Uhr verfügbar. Die große Nachfrage hat uns zu diesem Schritt bewogen.',
      link: '/news'
    },
    {
      title: 'Tag der offenen Tür am 5. April',
      date: '5. März 2026',
      author: 'Michael Weber',
      preview: 'Besuchen Sie uns am 5. April zum Tag der offenen Tür. Schnuppertraining, Vorführungen und Beratung für Interessierte. Für Verpflegung ist gesorgt.',
      link: '/news'
    },
    {
      title: 'Erfolgreiche Teilnahme am Landesturnier',
      date: '28. Februar 2026',
      author: 'Thomas Müller',
      preview: 'Beim Landesturnier in Stuttgart konnten unsere Nachwuchsboxer überzeugen. Zwei Goldmedaillen und eine Silbermedaille sind das Ergebnis harter Trainingsarbeit.',
      link: '/news'
    },
    {
      title: 'Neuer Trainingsraum eröffnet',
      date: '20. Februar 2026',
      author: 'Michael Weber',
      preview: 'Dank großzügiger Spenden konnten wir einen zusätzlichen Trainingsraum einrichten. Mehr Platz für unsere wachsende Mitgliederzahl.',
      link: '/news'
    },
    {
      title: 'Workshop: Ernährung im Boxsport',
      date: '12. Februar 2026',
      author: 'Sarah Schmidt',
      preview: 'Am 25. Februar findet ein Workshop zum Thema Sporternährung statt. Ernährungsberaterin Dr. Anna Meier gibt wertvolle Tipps für Boxer.',
      link: '/news'
    },
    {
      title: 'Frauenboxen: Neue Gruppe startet',
      date: '5. Februar 2026',
      author: 'Sarah Schmidt',
      preview: 'Aufgrund der hohen Nachfrage starten wir eine zweite Frauenboxen-Gruppe. Trainingszeiten: Dienstags 18:00 Uhr und Donnerstags 19:00 Uhr.',
      link: '/news'
    },
    {
      title: 'Jahreshauptversammlung 2026',
      date: '28. Januar 2026',
      author: 'Michael Weber',
      preview: 'Die Jahreshauptversammlung findet am 15. Februar statt. Alle Mitglieder sind herzlich eingeladen. Tagesordnung folgt per E-Mail.',
      link: '/news'
    },
    {
      title: 'Wintercamp in den Alpen',
      date: '15. Januar 2026',
      author: 'Thomas Müller',
      preview: 'Unser traditionelles Wintercamp führt uns dieses Jahr nach Garmisch-Partenkirchen. Intensives Training in beeindruckender Bergkulisse vom 10.-14. Februar.',
      link: '/news'
    }
  ];

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aktuelle News</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
            Bleiben Sie auf dem Laufenden über Wettkampfergebnisse, Veranstaltungen und Neuigkeiten aus unserem Verein.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
