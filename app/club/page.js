'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Users, HelpCircle, Shield, Award, Briefcase } from 'lucide-react';

export default function ClubPage() {
  const coaches = [
    { name: 'Thomas Müller', role: 'Cheftrainer', experience: '15 Jahre Erfahrung' },
    { name: 'Sarah Schmidt', role: 'Trainerin Frauenboxen', experience: '8 Jahre Erfahrung' },
    { name: 'Michael Weber', role: 'Jugendtrainer', experience: '12 Jahre Erfahrung' },
    { name: 'Andreas Becker', role: 'Fitness-Trainer', experience: '10 Jahre Erfahrung' }
  ];

  const board = [
    { name: 'Klaus Hoffmann', position: '1. Vorsitzender' },
    { name: 'Petra Wagner', position: '2. Vorsitzende' },
    { name: 'Stefan Richter', position: 'Kassenwart' },
    { name: 'Julia Klein', position: 'Schriftführerin' }
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
      answer: 'Wir bieten Training für alle Altersgruppen ab 6 Jahren an. Nach oben gibt es keine Grenze.'
    },
    {
      question: 'Kann ich auch ohne Wettkampfambitionen trainieren?',
      answer: 'Absolut! Viele unserer Mitglieder trainieren rein aus Fitness- und Gesundheitsgründen.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unser Verein</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            KSL Boxing Lahr steht für Tradition, Leidenschaft und Gemeinschaft im Boxsport.
          </p>

          {/* Mission Statement */}
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
                  Eine Mitgliedschaft bei KSL Boxing Lahr bietet dir Zugang zu professionellem Training, erfahrenen Trainern und einer motivierenden Gemeinschaft. Wähle das Paket, das zu deinen Zielen passt.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Erwachsene</h3>
                    <p className="text-3xl font-bold text-primary mb-4">49€/Monat</p>
                    <p className="text-muted-foreground">Zugang zu allen Erwachsenen-Trainingsgruppen</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Jugendliche (13-17)</h3>
                    <p className="text-3xl font-bold text-primary mb-4">35€/Monat</p>
                    <p className="text-muted-foreground">Spezielles Jugendtraining mit altersgerechter Betreuung</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Kinder (6-12)</h3>
                    <p className="text-3xl font-bold text-primary mb-4">29€/Monat</p>
                    <p className="text-muted-foreground">Spielerisches Boxtraining für die Kleinsten</p>
                  </div>
                  <div className="p-6 bg-secondary rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-2">Premium</h3>
                    <p className="text-3xl font-bold text-primary mb-4">69€/Monat</p>
                    <p className="text-muted-foreground">Unbegrenzter Zugang zu allen Trainingsgruppen</p>
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
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">1.</span>
                    <span>Respektvoller Umgang mit allen Mitgliedern, unabhängig von Alter, Geschlecht oder Leistungsniveau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">2.</span>
                    <span>Fairness im Training und Wettkampf – keine Gewalt außerhalb des geregelten Sparrings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">3.</span>
                    <span>Pünktlichkeit und Zuverlässigkeit bei Trainingseinheiten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">4.</span>
                    <span>Sauberkeit und Ordnung in den Trainingsräumen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">5.</span>
                    <span>Null-Toleranz gegenüber Diskriminierung, Mobbing oder unangemessenem Verhalten</span>
                  </li>
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
                <p className="text-lg leading-relaxed mb-8">
                  Unser Trainerteam besteht aus erfahrenen und lizenzierten Boxtrainern, die mit Leidenschaft und Fachwissen arbeiten.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coaches.map((coach, index) => (
                    <div key={index} className="p-6 bg-secondary rounded-lg border border-border">
                      <h3 className="text-xl font-semibold mb-2">{coach.name}</h3>
                      <p className="text-primary font-medium mb-2">{coach.role}</p>
                      <p className="text-muted-foreground">{coach.experience}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Board */}
          <section id="board" className="mb-20 scroll-mt-20">
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl font-semibold">Vorstand</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-8">
                  Unser ehrenamtlicher Vorstand kümmert sich um die organisatorischen und administrativen Belange des Vereins.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {board.map((member, index) => (
                    <div key={index} className="p-6 bg-secondary rounded-lg border border-border">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium">{member.position}</p>
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
