'use client';

import { motion } from 'framer-motion';
import NewsCard from '@/components/NewsCard';

export default function NewsPage() {
  const newsArticles = [
    {
      title: 'Granit Stein fordert Box-Legende Felix Sturm heraus',
      date: '10. Juli 2026',
      author: 'KSL Boxing Lahr',
      preview: 'Ganz großer Boxsport: Am 11. Juli 2026 trifft Granit Stein in der Porsche-Arena Stuttgart auf Felix Sturm – den fünffachen Ex-Weltmeister und eine der prägendsten Figuren des deutschen Profiboxens. Für den 47-jährigen Sturm ist es der große Abschiedskampf „One Last Dance". Gekämpft wird im Halbschwergewicht über zehn Runden. Über den Kampf wurde unter anderem in der BILD berichtet, die Übertragung läuft live bei BILD+ und wird weltweit in über 200 Länder gezeigt. Wir drücken Granit Stein die Daumen!',
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
