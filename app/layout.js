import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'KSL Boxing Lahr – Boxverein für alle Altersgruppen',
  description: 'Willkommen bei KSL Boxing Lahr. Boxtraining für Anfänger, Fortgeschrittene und Wettkämpfer. Fitness-Boxen, Frauenboxen, Kinder- und Jugendtraining.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <div className="min-h-screen bg-background">
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
