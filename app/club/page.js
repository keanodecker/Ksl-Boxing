'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users, HelpCircle, Shield, Award, ImageIcon } from 'lucide-react';

const coaches = [
  { name: 'Sezer Ülker',       role: 'Clubchef · Trainer' },
  { name: 'Pepe Sanfilippo',   role: 'Trainer' },
  { name: 'Dan Hoffman',       role: 'Trainer' },
  { name: 'Marco Gronert',     role: 'Trainer' },
];

const faqs = [
  {
    question: 'Brauche ich Vorkenntnisse?',
    answer: 'Nein, bei uns sind Anfänger herzlich willkommen. Unsere Trainer holen jeden dort ab, wo er steht.'
  },
  {
    question: 'Was muss ich zum Training mitbringen?',
    answer: 'Für das erste Probetraining reicht Sportkleidung. Boxhandschuhe und weitere Ausrüstung stellen wir zur Verfügung.'
  },
  {
    question: 'Wie oft sollte ich trainieren?',
    answer: 'Wir empfehlen mindestens 2-3 Trainingseinheiten pro Woche für optimale Fortschritte.'
  },
  {
    question: 'Gibt es eine Altersbeschränkung?',
    answer: 'Wir bieten Training für alle Altersgruppen ab 7 Jahren an. Nach oben gibt es keine Grenze.'
  },
  {
    question: 'Kann ich auch ohne Wettkampfambitionen trainieren?',
    answer: 'Absolut! Viele unserer Mitglieder trainieren rein aus Fitness- und Gesundheitsgründen.'
  }
];

export default function ClubPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unser Verein</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            KSL Boxing Lahr steht für Tradition, Leidenschaft und Gemeinschaft im Boxsport.
          </p>

          {/* Mission */}
          <section id="mission" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Leitbild</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-4">
                  KSL Boxing Lahr ist mehr als ein Sportverein – wir sind eine Gemeinschaft, die durch gemeinsame Werte und Leidenschaft für den Boxsport verbunden ist. Unser Ziel ist es, Menschen jeden Alters und jeder Herkunft die Möglichkeit zu geben, sich durch Boxen körperlich und mental weiterzuentwickeln.
                </p>
                <p className="text-lg leading-relaxed">
                  Wir fördern Disziplin, Respekt und Fairness – sowohl im Ring als auch im täglichen Leben. Bei uns steht der Mensch im Mittelpunkt, nicht nur der Athlet.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Philosophy */}
          <section id="philosophy" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Philosophie</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-4">
                  Unsere Trainingsphilosophie basiert auf drei Säulen: Technik, Kondition und Charakter. Wir glauben daran, dass Boxen mehr ist als nur Sport – es ist eine Lebensschule.
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Technik:</strong> Präzise Ausführung und kontinuierliche Verbesserung der Grundlagen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Kondition:</strong> Aufbau von Ausdauer, Kraft und Schnelligkeit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Charakter:</strong> Förderung von Disziplin, Durchhaltevermögen und Respekt</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Membership */}
          <section id="membership" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Mitgliedschaft</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-6">
                  Eine Mitgliedschaft bei KSL Boxing Lahr bietet dir Zugang zu professionellem Training, erfahrenen Trainern und einer motivierenden Gemeinschaft.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Erwachsene</h3>
                    <p className="text-3xl font-bold text-primary mb-4">55 €/Monat</p>
                    <p className="text-muted-foreground">Zugang zu allen Erwachsenen-Trainingsgruppen</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Kinder</h3>
                    <p className="text-3xl font-bold text-primary mb-4">40 €/Monat</p>
                    <p className="text-muted-foreground">Kindertraining ab 7 Jahren</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Häufig gestellte Fragen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-0">
                      <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Code of Conduct */}
          <section id="code" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Verhaltenskodex</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-6">
                  Unser Verhaltenskodex gilt für alle Mitglieder, Trainer und Besucher. Er bildet die Grundlage für ein respektvolles und sicheres Miteinander.
                </p>
                <ul className="space-y-3 text-lg">
                  {[
                    'Respektvoller Umgang mit allen Mitgliedern, unabhängig von Alter, Geschlecht oder Leistungsniveau',
                    'Fairness im Training und Wettkampf – keine Gewalt außerhalb des geregelten Sparrings',
                    'Pünktlichkeit und Zuverlässigkeit bei Trainingseinheiten',
                    'Sauberkeit und Ordnung in den Trainingsräumen',
                    'Null-Toleranz gegenüber Diskriminierung, Mobbing oder unangemessenem Verhalten',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Coaches */}
          <section id="coaches" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Unsere Trainer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coaches.map((coach, index) => (
                    <div key={index} className="flex gap-4 p-5 bg-secondary rounded-lg border border-border">
                      {/* Foto-Platzhalter */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-muted border border-border flex flex-col items-center justify-center gap-1">
                        <ImageIcon className="w-7 h-7 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground/50">Foto</span>
                      </div>
                      {/* Info */}
                      <div className="flex flex-col justify-center">
                        <h3 className="text-lg font-bold">{coach.name}</h3>
                        <p className="text-primary text-sm font-medium mt-1">{coach.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

        </motion.div>
      </div>
    </main>
  );
}
