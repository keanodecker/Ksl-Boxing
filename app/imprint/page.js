'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ImprintPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Impressum</h1>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Angaben gemäß § 5 TMG</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div>
                <p className="font-semibold">KSL Boxing Lahr e.V.</p>
                <p className="text-muted-foreground">Dinglingerhauptstr. 87</p>
                <p className="text-muted-foreground">77933 Lahr/Schwarzwald</p>
              </div>
              <div>
                <p className="font-semibold">Vertreten durch:</p>
                <p className="text-muted-foreground">[Name 1. Vorsitzender eintragen]</p>
                <p className="text-muted-foreground">[Name 2. Vorsitzender eintragen]</p>
              </div>
              <div>
                <p className="font-semibold">Kontakt:</p>
                <p className="text-muted-foreground">Telefon: [Telefonnummer eintragen]</p>
                <p className="text-muted-foreground">E-Mail: [E-Mail-Adresse eintragen]</p>
              </div>
              <div>
                <p className="font-semibold">Registereintrag:</p>
                <p className="text-muted-foreground">Eintragung im Vereinsregister</p>
                <p className="text-muted-foreground">Registergericht: Amtsgericht Freiburg</p>
                <p className="text-muted-foreground">Registernummer: [Registernummer eintragen]</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground/60 italic">Stand: 2026</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div>
                <p className="font-semibold mb-2">Haftung für Inhalte</p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Haftung für Links</p>
                <p className="text-muted-foreground leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Urheberrecht</p>
                <p className="text-muted-foreground leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Streitschlichtung</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
