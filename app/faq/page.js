'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Wo ist der Boxclub genau?',
    answer: (
      <>
        Unser Club befindet sich in der <strong>Dinglingerhauptstr. 87, 77933 Lahr/Schwarzwald</strong>. Auf unserer{' '}
        <Link href="/contact" className="text-primary underline hover:text-primary/80">
          Kontaktseite
        </Link>{' '}
        findest du ein Video, das dir den genauen Weg vom Parkplatz direkt zu uns zeigt – damit du uns beim ersten Mal problemlos findest.
      </>
    ),
  },
  {
    question: 'Wie kann ich ein Probetraining vereinbaren?',
    answer:
      'Ganz einfach: Schreib uns über das Kontaktformular auf unserer Kontaktseite oder ruf uns direkt an. Das Probetraining ist kostenlos und du brauchst keine Vorerfahrung – komm einfach vorbei!',
  },
  {
    question: 'Brauche ich Vorkenntnisse?',
    answer:
      'Nein, bei uns sind Anfänger herzlich willkommen. Unsere Trainer holen jeden dort ab, wo er steht – egal ob du noch nie einen Boxhandschuh angefasst hast oder schon erste Erfahrungen mitbringst.',
  },
  {
    question: 'Wie oft sollte ich trainieren?',
    answer:
      'Wir empfehlen mindestens 2–3 Trainingseinheiten pro Woche für optimale Fortschritte. Natürlich kannst du auch öfter kommen – je nach Gruppe und persönlichem Ziel.',
  },
  {
    question: 'Ab welchem Alter kann man bei KSL Boxing trainieren?',
    answer:
      'Wir bieten Trainingsgruppen ab ca. 6 Jahren an. Im Kindertraining lernen die Kleinsten spielerisch die Grundlagen. Für Jugendliche und Erwachsene gibt es eigene Gruppen – von Anfänger bis Wettkampf.',
  },
  {
    question: 'Was muss ich zum ersten Training mitbringen?',
    answer:
      'Für das Probetraining reicht bequeme Sportkleidung und Turnschuhe. Bandagen und Handschuhe kannst du dir beim ersten Mal bei uns ausleihen. Wasser nicht vergessen!',
  },
  {
    question: 'Was kostet die Mitgliedschaft?',
    answer:
      'Die genauen Mitgliedsbeiträge teilen wir dir gerne persönlich mit. Kontaktiere uns einfach – wir finden das passende Angebot für dich.',
  },
];

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Card className="bg-card text-card-foreground border-border mb-4">
        <button
          className="w-full text-left"
          onClick={() => setOpen((v) => !v)}
        >
          <CardHeader className="flex flex-row items-center justify-between py-5">
            <CardTitle className="text-lg font-semibold pr-4">{question}</CardTitle>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </CardHeader>
        </button>
        {open && (
          <CardContent className="pt-0 pb-5 text-muted-foreground leading-relaxed">
            {answer}
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Häufig gestellte Fragen – hier findest du schnelle Antworten.
          </p>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl border border-border bg-card text-center">
            <p className="text-muted-foreground mb-4">Noch eine andere Frage?</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
