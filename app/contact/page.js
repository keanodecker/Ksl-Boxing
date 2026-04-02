'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kontakt</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            Haben Sie Fragen oder möchten Sie ein Probetraining vereinbaren? Kontaktieren Sie uns – wir freuen uns auf Ihre Nachricht!
          </p>

          {/* Der Weg zum Club – YouTube Video */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Der Weg zum Club</h2>
            <p className="text-muted-foreground mb-6">
              Noch nie bei uns gewesen? Dieses Video zeigt dir den Weg vom Parkplatz direkt zu unserem Boxclub.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.youtube.com/embed/uuGJi7odF9o"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="Der Weg vom Parkplatz zum Boxing Club"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        KSL Boxing Lahr<br />
                        Dinglingerhauptstr. 87<br />
                        77933 Lahr/Schwarzwald
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-muted-foreground">+49 7821 123456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <p className="text-muted-foreground">info@ksl-boxing-lahr.de</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Montag - Freitag: 16:00 - 22:00 Uhr<br />
                        Samstag: 09:00 - 16:00 Uhr<br />
                        Sonntag: Geschlossen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card text-card-foreground border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Standort</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?q=Dinglingerhauptstr.+87,+77933+Lahr&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="KSL Boxing Lahr Standort"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
