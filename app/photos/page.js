import { readdirSync } from 'fs';
import { join } from 'path';
import PhotoGallery from '@/components/PhotoGallery';

function readPhotos(folder) {
  try {
    return readdirSync(join(process.cwd(), 'public', folder))
      .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort((a, b) => {
        const na = parseInt(a.match(/\d+/)?.[0] ?? '0', 10);
        const nb = parseInt(b.match(/\d+/)?.[0] ?? '0', 10);
        return na - nb;
      })
      .map(f => `/${folder}/${f}`);
  } catch {
    return [];
  }
}

export default function PhotosPage() {
  const kidsPhotos = readPhotos('kindertraining');
  const clubPhotos = readPhotos('club-fotos');

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Fotogalerie</h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
          Eindrücke aus unserem Training und Vereinsleben bei KSL Boxing Lahr.
        </p>
        <PhotoGallery kidsPhotos={kidsPhotos} clubPhotos={clubPhotos} />
      </div>
    </main>
  );
}
