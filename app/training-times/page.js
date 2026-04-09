'use client';

import { motion } from 'framer-motion';
import TrainingTimeTable from '@/components/TrainingTimeTable';

export default function TrainingTimesPage() {
  const schedules = [
    {
      id: 'beginners',
      group: 'Anfängertraining & Kindertraining',
      note: 'Kindertraining ab 7 Jahren · Anfänger',
      schedule: [
        { day: 'Montag',   time: '17:30 - 18:30 Uhr' },
        { day: 'Mittwoch', time: '17:30 - 18:30 Uhr' },
      ]
    },
    {
      id: 'fitnessboxen',
      group: 'Fitnessboxen',
      note: 'Ab 14 Jahren · alle Altersgruppen',
      schedule: [
        { day: 'Montag',   time: '18:00 - 19:00 Uhr' },
        { day: 'Mittwoch', time: '18:00 - 19:00 Uhr' },
      ]
    },
    {
      id: 'fitness',
      group: 'Manager Fitnessboxen',
      note: 'Ab 40 Jahren',
      schedule: [
        { day: 'Dienstag', time: '18:00 - 19:15 Uhr' },
      ]
    },
    {
      id: 'advanced',
      group: 'Wettkampftraining',
      note: 'Profi- und Amateurboxen · Wettkampfvorbereitung',
      schedule: [
        { day: 'Montag',     time: '19:00 - 20:30 Uhr' },
        { day: 'Dienstag',   time: '19:00 - 20:30 Uhr' },
        { day: 'Mittwoch',   time: '19:00 - 20:30 Uhr' },
        { day: 'Donnerstag', time: '19:00 - 20:30 Uhr' },
        { day: 'Freitag',    time: '19:00 - 20:30 Uhr' },
      ]
    },
    {
      id: 'women',
      group: 'Frauenboxen',
      schedule: [
        { day: 'Dienstag', time: '18:00 - 19:00 Uhr' },
      ]
    },
  ];

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trainingszeiten</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            Hier findest du eine Übersicht aller Trainingszeiten. Bei Fragen kontaktiere uns gerne.
          </p>

          <div className="space-y-8">
            {schedules.map((item) => (
              <div key={item.id} id={item.id} className="scroll-mt-20">
                <TrainingTimeTable {...item} />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 p-8 bg-secondary rounded-2xl border border-border"
          >
            <h2 className="text-2xl font-semibold mb-4">Wichtige Hinweise</h2>
            <ul className="space-y-3 text-lg text-secondary-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Bitte erscheine 10 Minuten vor Trainingsbeginn, um dich umzuziehen und aufzuwärmen.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>An Feiertagen und in den Schulferien können abweichende Zeiten gelten.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Probetraining ist nach vorheriger Anmeldung jederzeit möglich.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
