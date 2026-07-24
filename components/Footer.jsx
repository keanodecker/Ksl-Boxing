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

        {/* visualized by media castle — gestapelte Signatur (dunkle Variante auf Navy) */}
        <div className="mt-8 pt-6 border-t border-border/60 flex justify-center">
          <a
            href="https://www.media-castle.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="visualized by media castle – zur Media Castle Webseite"
            className="inline-flex items-center gap-3 no-underline transition-opacity duration-300 hover:opacity-85"
            style={{
              fontFamily: 'Poppins, system-ui, sans-serif',
              background: '#041833',
              padding: '12px 20px',
              borderRadius: '12px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mc-logo-white.png"
              alt="Media Castle"
              width={34}
              height={34}
              className="flex-shrink-0"
            />
            <span className="flex flex-col" style={{ lineHeight: 1.02 }}>
              <span
                className="font-medium uppercase"
                style={{ fontSize: '9px', letterSpacing: '2.5px', color: 'rgba(255,255,255,.6)' }}
              >
                visualized by
              </span>
              <span
                className="font-semibold"
                style={{ fontSize: '22px', letterSpacing: '-0.3px', color: '#ffffff' }}
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
