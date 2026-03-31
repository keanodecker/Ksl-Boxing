'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Datenschutzerklärung</h1>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">1. Datenschutz auf einen Blick</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div>
                <p className="font-semibold mb-2">Allgemeine Hinweise</p>
                <p className="text-muted-foreground leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Datenerfassung auf dieser Website</p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">2. Hosting</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <p className="font-semibold mb-2">Externes Hosting</p>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">3. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div>
                <p className="font-semibold mb-2">Datenschutz</p>
                <p className="text-muted-foreground leading-relaxed">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</p>
                <p className="text-muted-foreground leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-muted-foreground mt-2">
                  KSL Boxing Lahr e.V.<br />
                  Musterstraße 123<br />
                  77933 Lahr/Schwarzwald<br />
                  Telefon: +49 7821 123456<br />
                  E-Mail: info@ksl-boxing-lahr.de
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Speicherdauer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">4. Datenerfassung auf dieser Website</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <div>
                <p className="font-semibold mb-2">Kontaktformular</p>
                <p className="text-muted-foreground leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Anfrage per E-Mail, Telefon oder Telefax</p>
                <p className="text-muted-foreground leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">5. Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
