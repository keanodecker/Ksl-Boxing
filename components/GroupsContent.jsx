'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Dumbbell, Users, GraduationCap, Trophy, Play, X } from 'lucide-react';

const groups = [
  {
    id: 'beginners',
    icon: GraduationCap,
    name: 'Anfängertraining & Kindertraining',
    description: 'Kindertraining ab 7 Jahren und Anfängertraining – spielerisch und strukturiert in die Welt des Boxens einsteigen.',
    details: [
      'Kindertraining ab 7 Jahren',
      'Spielerische Vermittlung der Grundtechniken',
      'Koordinations- und Bewegungsübungen',
      'Förderung von Konzentration und Disziplin',
      'Systematischer Aufbau der Grundlagen für Anfänger',
      'Kein Vollkontakt-Sparring',
    ],
    requirements: 'Ab 7 Jahren – Einverständnis der Erziehungsberechtigten für Minderjährige',
    schedule: 'Mo & Mi · 17:30 – 18:30 Uhr',
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    name: 'Manager Fitnessboxen',
    description: 'Training ab 40 Jahren – egal ob Profi, Amateur, Ex-Profi oder absoluter Anfänger. Effektives Ganzkörpertraining in entspannter Atmosphäre.',
    details: [
      'Cardio-Training an Sandsack und Pratzen',
      'Kraft- und Ausdauertraining',
      'Technisches Boxtraining ohne Vollkontakt',
      'Stressabbau und mentale Stärke',
      'Kleine Gruppen für individuelle Betreuung',
      'Perfekt für Fitness und Gesundheit',
    ],
    requirements: 'Ab 40 Jahren, keine Vorkenntnisse erforderlich',
    schedule: 'Di · 18:00 – 19:15 Uhr',
  },
  {
    id: 'advanced',
    icon: Trophy,
    name: 'Wettkampftraining',
    description: 'Profi- und Amateurtraining für Wettkämpfer. Intensives Training auf hohem Niveau mit erfahrenen Trainern.',
    details: [
      'Profi- und Amateurboxen',
      'Intensives technisches und taktisches Training',
      'Sparring mit erfahrenen Partnern',
      'Ringpsychologie und Wettkampfanalyse',
      'Teilnahme an regionalen und überregionalen Turnieren',
      'Individuelle Wettkampfvorbereitung',
    ],
    requirements: 'Boxerfahrung erforderlich',
    schedule: 'Mo – Fr · 19:00 – 20:30 Uhr',
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
    requirements: 'Keine Vorkenntnisse erforderlich',
    schedule: 'Di · 18:00 – 19:00 Uhr',
  },
];

export default function GroupsContent({ kidsPhotos = [], kidsVideos = [] }) {
  const [activeVideo, setActiveVideo] = useState(null);

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

                  {/* Kindertraining Fotos & Videos */}
                  {group.id === 'beginners' && (kidsPhotos.length > 0 || kidsVideos.length > 0) && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Impressionen aus dem Kindertraining</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {kidsPhotos.map((src, i) => (
                          <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={src}
                              alt={`Kindertraining ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                        {kidsVideos.map((v) => (
                          <div
                            key={v.videoId}
                            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => setActiveVideo(v)}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                              alt={v.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                              <div className="bg-black/60 group-hover:bg-primary rounded-full p-3 transition-colors duration-200">
                                <Play className="w-6 h-6 text-white fill-white" />
                              </div>
                            </div>
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

      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>
          {activeVideo && (
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={activeVideo.title}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
