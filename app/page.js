'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HeroSlider from '@/components/HeroSlider';
import NewsCard from '@/components/NewsCard';
import GroupCard from '@/components/GroupCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Trophy, Medal, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  const router = useRouter();

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1695292007578-583aeda2729a',
      title: 'Willkommen bei KSL Boxing Lahr',
      subtitle: 'Tradition trifft Leidenschaft – Boxen für alle Altersgruppen und Leistungsstufen',
      buttonText: 'Mehr erfahren',
      link: '/club'
    },
    {
      image: 'https://images.unsplash.com/photo-1601039834205-4e3f1e932f5a',
      title: 'Wettkampfmannschaft',
      subtitle: 'Hochleistungstraining für ambitionierte Boxer – Werde Teil unseres Wettkampfteams',
      buttonText: 'Zum Team',
      link: '/groups#competition'
    },
    {
      image: 'https://images.unsplash.com/photo-1702667752618-0f347ec02f74',
      title: 'Fitness-Boxen',
      subtitle: 'Effektives Ganzkörpertraining – Verbessere Kraft, Ausdauer und Koordination',
      buttonText: 'Jetzt starten',
      link: '/groups#fitness'
    },
    {
      image: 'https://images.unsplash.com/photo-1475670033737-f3bfd43d2d29',
      title: 'Frauenboxen',
      subtitle: 'Empowerment durch Sport – Spezielles Training für Frauen in motivierender Atmosphäre',
      buttonText: 'Mehr erfahren',
      link: '/groups#women'
    },
    {
      image: 'https://images.unsplash.com/photo-1638851240443-762225963c29',
      title: 'Kinder & Jugend',
      subtitle: 'Spielerisch Boxen lernen – Förderung von Disziplin, Respekt und Selbstvertrauen',
      buttonText: 'Für Kids',
      link: '/groups#kids'
    },
    {
      image: 'https://images.unsplash.com/photo-1679500502523-b40fb6f0563d',
      title: 'Anfängertraining',
      subtitle: 'Keine Vorkenntnisse nötig – Starte deine Box-Karriere mit professioneller Anleitung',
      buttonText: 'Probetraining',
      link: '/groups#beginners'
    }
  ];

  const latestNews = [
    {
      title: 'Erfolgreicher Saisonstart der Wettkampfmannschaft',
      date: '15. März 2026',
      author: 'Thomas Müller',
      preview: 'Unsere Wettkampfmannschaft startet mit beeindruckenden Siegen in die neue Saison. Drei unserer Athleten konnten ihre Kämpfe für sich entscheiden.',
      link: '/news'
    },
    {
      title: 'Neue Trainingszeiten für Fitness-Boxen',
      date: '10. März 2026',
      author: 'Sarah Schmidt',
      preview: 'Ab April bieten wir zusätzliche Trainingszeiten für Fitness-Boxen an. Jetzt auch mittwochs um 19:00 Uhr verfügbar.',
      link: '/news'
    },
    {
      title: 'Tag der offenen Tür am 5. April',
      date: '5. März 2026',
      author: 'Michael Weber',
      preview: 'Besuchen Sie uns am 5. April zum Tag der offenen Tür. Schnuppertraining, Vorführungen und Beratung für Interessierte.',
      link: '/news'
    }
  ];

  const trainingGroups = [
    {
      image: 'https://images.unsplash.com/photo-1593352217070-4900df41715b',
      name: 'Anfängertraining & Kindertraining',
      description: 'Kindertraining ab 7 Jahren und Anfängertraining – spielerisch und strukturiert in die Welt des Boxens einsteigen. Mo & Mi · 17:30–18:30 Uhr.',
      detailsLink: '/groups#beginners',
      timesLink: '/training-times#beginners'
    },
    {
      image: 'https://images.unsplash.com/photo-1679500683809-35c8236381b6',
      name: 'Manager Fitnessboxen',
      description: 'Training ab 40 Jahren – egal ob Profi, Amateur, Ex-Profi oder Anfänger. Effektives Ganzkörpertraining in entspannter Atmosphäre. Di · 18:00–19:15 Uhr.',
      detailsLink: '/groups#fitness',
      timesLink: '/training-times#fitness'
    },
    {
      image: 'https://images.unsplash.com/photo-1679500683809-35c8236381b6',
      name: 'Wettkampftraining',
      description: 'Profi- und Amateurboxen für Wettkämpfer. Intensives Training auf hohem Niveau mit erfahrenen Trainern. Mo–Fr · 19:00–20:30 Uhr.',
      detailsLink: '/groups#advanced',
      timesLink: '/training-times#advanced'
    },
    {
      image: 'https://images.unsplash.com/photo-1697240666845-6095e2425870',
      name: 'Fitnessboxen',
      description: 'Für alle ab 14 Jahren – jung oder alt, Anfänger oder erfahren. Effektives Ganzkörpertraining ohne Wettkampfambitionen. Mo & Mi · 18:00–19:00 Uhr.',
      detailsLink: '/groups#fitnessboxen',
      timesLink: '/training-times#fitnessboxen'
    },
    {
      image: 'https://images.unsplash.com/photo-1517438322307-e67111335449',
      name: 'Frauenboxen',
      description: 'Spezielles Training für Frauen in motivierender und unterstützender Atmosphäre. Di · 18:00–19:00 Uhr.',
      detailsLink: '/groups#women',
      timesLink: '/training-times#women'
    },
  ];

  const testimonials = [
    {
      quote: 'KSL Boxing hat mein Leben verändert. Die Trainer sind top und die Atmosphäre ist familiär. Ich habe nicht nur technisch viel gelernt, sondern auch an Selbstvertrauen gewonnen.',
      name: 'Markus Schneider',
      role: 'Mitglied seit 2023'
    },
    {
      quote: 'Als Frau hatte ich anfangs Bedenken, aber das Frauenboxen-Training ist perfekt. Tolle Gruppe, professionelle Anleitung und ein sicheres Umfeld zum Lernen.',
      name: 'Julia Hoffmann',
      role: 'Frauenboxen'
    },
    {
      quote: 'Mein Sohn trainiert seit einem Jahr bei KSL Boxing. Die Entwicklung ist beeindruckend – nicht nur sportlich, sondern auch in Sachen Disziplin und Respekt.',
      name: 'Andreas Becker',
      role: 'Vater eines Nachwuchsboxers'
    },
    {
      quote: 'Das Fitness-Boxen ist das beste Workout, das ich je gemacht habe. Abwechslungsreich, intensiv und macht einfach Spaß. Die Gruppe motiviert sich gegenseitig.',
      name: 'Lisa Wagner',
      role: 'Fitness-Boxen'
    },
    {
      quote: 'Von Null auf Wettkampfniveau in zwei Jahren – dank der hervorragenden Trainer bei KSL Boxing. Die individuelle Betreuung macht den Unterschied.',
      name: 'David Klein',
      role: 'Wettkampfmannschaft'
    },
    {
      quote: 'Ich bin mit 45 Jahren als Anfänger eingestiegen und wurde super aufgenommen. Alter spielt hier keine Rolle – jeder wird dort abgeholt, wo er steht.',
      name: 'Stefan Richter',
      role: 'Anfängertraining'
    }
  ];

  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Champions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Unsere Champions</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Athleten, die den Namen KSL Boxing Lahr in die Geschichtsbücher geschrieben haben.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
              {/* Card 1 – Sezer Ülker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-full"
              >
                <Card className="bg-card text-card-foreground border-border h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge className="bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                        EUROPAMEISTER
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      Sezer &bdquo;Cesar&ldquo; Ülker
                    </CardTitle>
                    <p className="text-sm text-primary font-medium">&bdquo;Der Schwarzwaldbulle&ldquo;</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-muted-foreground leading-relaxed">
                      1× Europameister (I.B.F. Schwergewicht, 2015), mehrfacher Landesmeister und Gründer von KSL Boxing Lahr – mit über 30 Jahren Erfahrung im Boxsport gibt Sezer „Cesar" Ülker heute sein Wissen als Trainer und Clubchef an die nächste Generation weiter.
                    </p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><span className="text-primary font-bold">30+</span> Jahre Erfahrung</span>
                        <span className="text-border">·</span>
                        <span className="text-primary font-semibold">Europameister I.B.F.</span>
                        <span className="text-border">·</span>
                        <span className="text-primary font-semibold">Mehrfacher Landesmeister</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2 – Labinot Xhoxhaj */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full"
              >
                <Card className="bg-card text-card-foreground border-border h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge className="bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                        EUROPAMEISTER
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Labinot Xhoxhaj</CardTitle>
                    <p className="text-sm text-primary font-medium">EBU Europameister Schwergewicht</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Am 23. November 2024 erkämpfte er den EBU Europameistertitel im Schwergewicht. Ungeschlagen mit 22 Kämpfen (17 K.o.-Siege), zuletzt Titelverteidigung im Februar 2026 in Lahr. Aktuell auf Platz 25 der Weltrangliste im Schwergewicht.
                    </p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><span className="text-primary font-bold">22</span> Kämpfe</span>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1"><span className="text-primary font-bold">17</span> K.o.-Siege</span>
                        <span className="text-border">·</span>
                        <span className="text-primary font-semibold">EBU Europameister</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 3 – Belkijan Kaleshiq */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full"
              >
                <Card className="bg-card text-card-foreground border-border h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Medal className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge className="bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                        LANDESMEISTER
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Belkijan Kaleshiq</CardTitle>
                    <p className="text-sm text-primary font-medium">17 Jahre, U19 A-Klasse</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-muted-foreground leading-relaxed">
                      5 Landesmeisterschaften in Folge, 4× Badischer Meister. Eines der größten Boxtalente der Region.
                    </p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <span className="text-primary font-semibold">5× Landesmeister</span>
                        <span className="text-border">·</span>
                        <span className="text-primary font-semibold">4× Badischer Meister</span>
                        <span className="text-border">·</span>
                        <span>U19 A-Klasse</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 4 – Nachwuchs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-full"
              >
                <Card className="bg-card text-card-foreground border-border h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <Badge className="bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                        NACHWUCHS-STARS
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold">Die nächste Generation</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col gap-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Viktor Federov holte bei seinem allerersten Turnier in der A-Klasse (U15, eigentlich U13) die Bronzemedaille. Roman Becker wurde beim selben Turnier sein Kampf als bester Kampf der gesamten Altersgruppe ausgezeichnet – bei erst seinem zweiten Kampf überhaupt.
                    </p>
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                        <span><span className="text-primary font-semibold">Viktor:</span> Bronze – 1. Turnier</span>
                        <span><span className="text-primary font-semibold">Roman:</span> Bester Kampf des Turniers – 2. Kampf</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* CTA */}
            <div className="text-center p-8 bg-muted rounded-2xl border border-border">
              <p className="text-xl font-semibold mb-6 max-w-xl mx-auto">
                Werde Teil unserer Erfolgsgeschichte – Probetraining kostenlos.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                onClick={() => router.push('/contact')}
              >
                Jetzt Probetraining vereinbaren
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News Section – intentionally empty, content coming soon */}

      {/* Welcome Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-welcome.webp"
                alt="KSL Boxing Lahr"
                width={320}
                height={320}
                className="drop-shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Willkommen bei KSL Boxing Lahr</h2>
              <p className="text-lg leading-relaxed mb-4">
                KSL Boxing Lahr ist mehr als nur ein Boxverein – wir sind eine Familie. Seit unserer Gründung bieten wir professionelles Boxtraining für alle Altersgruppen und Leistungsstufen an.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ob Anfänger oder erfahrener Wettkämpfer, ob Fitness-orientiert oder leistungssportlich ambitioniert – bei uns findet jeder das passende Training. Unsere qualifizierten Trainer legen Wert auf individuelle Betreuung und schaffen eine motivierende Atmosphäre.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Besucher sind jederzeit herzlich willkommen. Komm vorbei und überzeuge dich selbst von unserem Training in Lahr!
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                onClick={() => router.push('/contact')}
              >
                Kontakt aufnehmen
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Groups Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Unsere Trainingsgruppen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingGroups.map((group, index) => (
                <GroupCard key={index} {...group} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Probetraining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-6">
                  Interessiert am Boxsport? Komm zu einem kostenlosen Probetraining und lerne unseren Verein kennen. Keine Vorkenntnisse erforderlich – bring einfach Sportkleidung mit!
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Kostenlos und unverbindlich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Professionelle Anleitung durch erfahrene Trainer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Ausrüstung wird gestellt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Für alle Altersgruppen geeignet</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                  onClick={() => router.push('/contact')}
                >
                  Jetzt anmelden
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Was unsere Mitglieder sagen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
