import Link from 'next/link';
import CookieSettingsButton from '@/components/CookieSettingsButton';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 KSL Boxing Lahr
          </p>
          <div className="flex gap-6">
            <Link
              href="/imprint"
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link
              href="/privacy"
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              Datenschutz
            </Link>
            <CookieSettingsButton />
          </div>
        </div>

        {/* Media Castle Signatur – Highlight-Stil (V4, hell) auf hellem Panel */}
        <div className="mt-8 pt-6 border-t border-border/60 flex justify-center">
          <a
            href="https://media-castle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-90"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none',
              fontFamily: 'Poppins, system-ui, sans-serif',
              color: '#041833',
              background: '#ffffff',
              padding: '12px 20px',
              borderRadius: '12px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mc-logo-navy.png" alt="Media Castle" width={48} height={48} />
            <span
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                lineHeight: 1.05,
                gap: '3px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(4,24,51,.55)',
                  background: 'rgba(47,107,255,.10)',
                  padding: '3px 6px',
                  borderRadius: '4px',
                }}
              >
                visualized by
              </span>
              <span
                style={{
                  fontSize: '27px',
                  fontWeight: 600,
                  letterSpacing: '-.3px',
                  background: 'rgba(4,24,51,.05)',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}
              >
                media castle
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
