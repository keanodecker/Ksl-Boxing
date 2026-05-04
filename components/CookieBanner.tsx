'use client';

import { useEffect, useState } from 'react';

type ConsentState = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const STORAGE_KEY = 'cookieConsent';

const defaultConsent = (): ConsentState => ({
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  timestamp: new Date().toISOString(),
});

function loadConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, timestamp: new Date().toISOString() }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentState>(defaultConsent());

  useEffect(() => {
    const existing = loadConsent();
    if (!existing) setVisible(true);

    const handler = () => {
      const current = loadConsent();
      if (current) setPrefs(current);
      setVisible(true);
    };
    window.addEventListener('openCookieSettings', handler);
    return () => window.removeEventListener('openCookieSettings', handler);
  }, []);

  const acceptAll = () => {
    const consent: ConsentState = { necessary: true, functional: true, analytics: true, marketing: true, timestamp: '' };
    saveConsent(consent);
    setVisible(false);
    setModalOpen(false);
  };

  const rejectAll = () => {
    const consent = defaultConsent();
    saveConsent(consent);
    setVisible(false);
    setModalOpen(false);
  };

  const saveCustom = () => {
    saveConsent(prefs);
    setVisible(false);
    setModalOpen(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop when modal is open */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setModalOpen(false)}
        />
      )}

      {/* Configure Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Cookie-Einstellungen</h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Hier können Sie Ihre Cookie-Präferenzen verwalten. Notwendige Cookies sind stets aktiv und können nicht deaktiviert werden.
              </p>

              <div className="space-y-4">
                <CategoryRow
                  title="Notwendige Cookies"
                  description="Erforderlich für den Betrieb der Website. Dazu zählen z.B. Session-Cookies und Sicherheits-Tokens. Diese können nicht deaktiviert werden."
                  checked={true}
                  disabled={true}
                  onChange={() => {}}
                />
                <CategoryRow
                  title="Funktionale Cookies"
                  description="Ermöglichen erweiterte Funktionen wie gespeicherte Einstellungen oder personalisierte Inhalte."
                  checked={prefs.functional}
                  disabled={false}
                  onChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
                />
                <CategoryRow
                  title="Analyse-Cookies"
                  description="Helfen uns zu verstehen, wie Besucher die Website nutzen. Aktuell nicht im Einsatz."
                  checked={prefs.analytics}
                  disabled={false}
                  onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                />
                <CategoryRow
                  title="Marketing-Cookies"
                  description="Werden für zielgerichtete Werbung verwendet. Aktuell nicht im Einsatz."
                  checked={prefs.marketing}
                  disabled={false}
                  onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={rejectAll}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors duration-200"
                >
                  Reject all
                </button>
                <button
                  onClick={saveCustom}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors duration-200"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner */}
      {!modalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                Wir verwenden Cookies, um den Betrieb dieser Website zu ermöglichen. Aktuell setzen wir ausschließlich technisch notwendige Cookies ein – kein Tracking, kein Remarketing.{' '}
                <a href="/privacy" className="underline hover:text-foreground transition-colors">
                  Datenschutzerklärung
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors duration-200 whitespace-nowrap"
                >
                  Reject all
                </button>
                <button
                  onClick={() => {
                    const existing = loadConsent();
                    if (existing) setPrefs(existing);
                    setModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-secondary transition-colors duration-200 whitespace-nowrap"
                >
                  Configure
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-border">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-semibold">{title}</span>
          {disabled && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
              Immer aktiv
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary mt-0.5
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${checked ? 'bg-primary' : 'bg-border'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200
            ${checked ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
}
