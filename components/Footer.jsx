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

        {/* Media Castle Signatur – horizontal, einzeilig (dunkler Grund) */}
        <div className="mt-8 pt-6 border-t border-border/60 flex justify-center">
          <a
            href="https://media-castle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontFamily: 'Poppins, system-ui, sans-serif',
              color: '#fff',
              fontSize: '13px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mc-logo-white.png" alt="Media Castle" width={18} height={18} />
            <span style={{ fontWeight: 400, color: 'rgba(255,255,255,.6)' }}>visualized by</span>
            <span style={{ fontWeight: 600 }}>media castle</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
