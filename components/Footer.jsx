import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const partners = [
    { name: 'Partner 1' },
    { name: 'Partner 2' },
    { name: 'Partner 3' },
    { name: 'Partner 4' },
    { name: 'Partner 5' },
    { name: 'Partner 6' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="mb-8">
          <p className="text-lg font-semibold mb-6">Unsere Partner</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg h-24 flex items-center justify-center border border-border hover:border-primary transition-colors duration-200"
              >
                <span className="text-sm text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2025 KSL Boxing Lahr
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
