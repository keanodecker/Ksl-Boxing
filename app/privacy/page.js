'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-sm text-muted-foreground mb-12">Stand: 2026</p>

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
                  Dinglingerhauptstr. 87<br />
                  77933 Lahr/Schwarzwald<br />
                  Telefon: (+49) 7821 / 502 09 62<br />
                  E-Mail: info@ksl-boxing.com
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

          {/* Cookie Section */}
          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">5. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div>
                <p className="font-semibold mb-2">Was sind Cookies?</p>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Website besuchen. Sie dienen dazu, bestimmte Einstellungen zu speichern und die Nutzung der Website zu ermöglichen.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-2">Welche Cookies verwenden wir?</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Diese Website verwendet ausschließlich technisch notwendige Cookies. Es werden derzeit kein Tracking, kein Remarketing und keine Analyse-Tools eingesetzt.
                </p>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-base">Notwendige Cookies</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">Immer aktiv</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Diese Cookies sind für den Betrieb der Website erforderlich. Dazu zählen z.B. das Speichern Ihrer Cookie-Einwilligung (LocalStorage-Key: <code className="bg-secondary px-1 rounded text-xs">cookieConsent</code>). Ohne diese Cookies kann die Website nicht ordnungsgemäß funktionieren.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border opacity-60">
                    <p className="font-semibold text-base mb-1">Funktionale Cookies</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ermöglichen erweiterte Funktionen wie gespeicherte Einstellungen. Aktuell nicht im Einsatz.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border opacity-60">
                    <p className="font-semibold text-base mb-1">Analyse-Cookies</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Helfen zu verstehen, wie Besucher die Website nutzen (z.B. Google Analytics). Aktuell nicht im Einsatz.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border opacity-60">
                    <p className="font-semibold text-base mb-1">Marketing-Cookies</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Werden für zielgerichtete Werbung verwendet (z.B. Meta Pixel). Aktuell nicht im Einsatz.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Einwilligung widerrufen</p>
                <p className="text-muted-foreground leading-relaxed">
                  Sie können Ihre Cookie-Einwilligung jederzeit widerrufen oder anpassen. Klicken Sie dazu auf{' '}
                  <CookieSettingsButton />{' '}
                  im Footer dieser Website oder löschen Sie den Eintrag <code className="bg-secondary px-1 rounded text-sm">cookieConsent</code> aus dem LocalStorage Ihres Browsers (Entwicklertools → Anwendung → Lokaler Speicher).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">6. Eingebettete Inhalte</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p className="text-muted-foreground leading-relaxed">
                Auf unserer Website sind YouTube-Videos eingebettet. Diese werden erst geladen, wenn Sie den entsprechenden Bereich der Website besuchen (Lazy Loading). YouTube kann dabei Daten erheben. Weitere Informationen finden Sie in der Datenschutzerklärung von Google/YouTube. Rechtsgrundlage für die Einbindung ist unser berechtigtes Interesse an einer ansprechenden Darstellung unserer Angebote (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">7. Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@ksl-boxing.com
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
