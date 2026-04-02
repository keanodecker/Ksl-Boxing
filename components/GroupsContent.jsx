'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Dumbbell, Users, Zap, Smile, GraduationCap, Clock } from 'lucide-react';

const groups = [
  {
    id: 'competition',
    icon: Trophy,
    name: 'Wettkampfmannschaft',
    description: 'Für ambitionierte Boxer mit Wettkampferfahrung oder dem Ziel, an Wettkämpfen teilzunehmen.',
    details: [
      'Intensives technisches Training',
      'Taktische Schulung und Ringpsychologie',
      'Sparring mit erfahrenen Partnern',
      'Individuelle Wettkampfvorbereitung',
      'Teilnahme an regionalen und überregionalen Turnieren',
      'Videoanalyse und Leistungsdiagnostik',
    ],
    requirements: 'Mindestalter 16 Jahre, Boxerpass erforderlich, ärztliche Untersuchung',
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    name: 'Fitness-Boxen',
    description: 'Effektives Ganzkörpertraining ohne Wettkampfambitionen. Perfekt für Fitness und Gesundheit.',
    details: [
      'Cardio-Training an Sandsack und Pratzen',
      'Krafttraining mit eigenem Körpergewicht',
      'Koordinations- und Schnelligkeitsübungen',
      'Techniktraining ohne Vollkontakt',
      'Stressabbau und mentale Stärke',
      'Für alle Fitnesslevel geeignet',
    ],
    requirements: 'Keine Vorkenntnisse erforderlich, ab 16 Jahren',
  },
  {
    id: 'women',
    icon: Users,
    name: 'Frauenboxen',
    description: 'Spezielles Training für Frauen in motivierender und unterstützender Atmosphäre.',
    details: [
      'Training in reiner Frauengruppe',
      'Selbstverteidigungstechniken',
      'Fitness und Körperformung',
      'Stärkung des Selbstbewusstseins',
      'Stressabbau und Empowerment',
      'Optionale Wettkampfteilnahme möglich',
    ],
    requirements: 'Keine Vorkenntnisse erforderlich, ab 16 Jahren',
  },
  {
    id: 'youth',
    icon: Zap,
    name: 'Jugendtraining',
    description: 'Für Jugendliche von 13-17 Jahren. Technische Grundlagen und Charakterbildung.',
    details: [
      'Altersgerechtes Techniktraining',
      'Fitness und Koordination',
      'Förderung von Disziplin und Respekt',
      'Sparring unter Aufsicht (optional)',
      'Vorbereitung auf Jugendwettkämpfe',
      'Soziale Kompetenz und Teamgeist',
    ],
    requirements: 'Alter 13-17 Jahre, Einverständnis der Erziehungsberechtigten',
  },
  {
    id: 'kids',
    icon: Smile,
    name: 'Kindertraining',
    description: 'Spielerisches Boxtraining für Kinder von 6-12 Jahren. Spaß und Bewegung stehen im Vordergrund.',
    details: [
      'Spielerische Vermittlung der Grundtechniken',
      'Koordinations- und Bewegungsspiele',
      'Förderung von Konzentration und Disziplin',
      'Soziales Lernen in der Gruppe',
      'Kein Vollkontakt-Sparring',
      'Spaß und Freude an der Bewegung',
    ],
    requirements: 'Alter 6-12 Jahre, Einverständnis der Erziehungsberechtigten',
  },
  {
    id: 'beginners',
    icon: GraduationCap,
    name: 'Anfängertraining',
    description: 'Perfekt für Einsteiger ohne Vorkenntnisse. Grundlagen des Boxens in entspannter Atmosphäre.',
    details: [
      'Systematischer Aufbau der Grundtechniken',
      'Beinarbeit und Distanzgefühl',
      'Sanfter Einstieg ins Sparring',
      'Fitness und Konditionsaufbau',
      'Individuelle Betreuung durch erfahrene Trainer',
      'Übergang in andere Gruppen möglich',
    ],
    requirements: 'Keine Vorkenntnisse erforderlich, ab 16 Jahren',
  },
  {
    id: 'open',
    icon: Clock,
    name: 'Offenes Training',
    description: 'Freies Training für erfahrene Boxer. Selbstständiges Arbeiten unter Aufsicht.',
    details: [
      'Freie Zeiteinteilung und Trainingsgestaltung',
      'Zugang zu allen Trainingsgeräten',
      'Sparring nach Absprache',
      'Trainer als Ansprechpartner vor Ort',
      'Für selbstständige Athleten',
      'Ergänzung zum regulären Training',
    ],
    requirements: 'Mindestens 1 Jahr Boxerfahrung, Mitgliedschaft erforderlich',
  },
];

export default function GroupsContent({ kidsPhotos }) {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Trainingsgruppen</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            Bei KSL Boxing Lahr findet jeder die passende Trainingsgruppe – vom Anfänger bis zum Wettkämpfer, vom Kind bis zum Erwachsenen.
          </p>

          <div className="space-y-12">
            {groups.map((group, index) => (
              <section key={group.id} id={group.id} className="scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card text-card-foreground border-border">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <group.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-3xl font-semibold">{group.name}</CardTitle>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {group.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Trainingsinhalte</h3>
                          <ul className="space-y-2">
                            {group.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-1">•</span>
                                <span className="text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Voraussetzungen</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {group.requirements}
                          </p>
                          <div className="flex flex-col gap-3">
                            <a
                              href={`/training-times#${group.id}`}
                              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] font-medium"
                            >
                              Trainingszeiten ansehen
                            </a>
                            <a
                              href="/contact"
                              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-200 active:scale-[0.98] font-medium"
                            >
                              Probetraining vereinbaren
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Kindertraining Fotos – direkt unter der Karte */}
                  {group.id === 'kids' && kidsPhotos.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Impressionen aus dem Kindertraining</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {kidsPhotos.map((src, i) => (
                          <div
                            key={src}
                            className="relative aspect-square overflow-hidden rounded-lg group"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt={`Kindertraining ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
