import { readdirSync } from 'fs';
import { join } from 'path';
import PhotoGallery from '@/components/PhotoGallery';
import { kidsVideos, clubVideos, geschichteVideos } from '@/lib/videos-config';

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

// Fügt bei jedem 4. Bild ein Außenaufnahme-Foto ein
function interleaveEveryFourth(base, extras) {
  if (extras.length === 0) return base;
  const result = [];
  let ei = 0;
  base.forEach((item, i) => {
    result.push(item);
    if ((i + 1) % 3 === 0 && ei < extras.length) result.push(extras[ei++]);
  });
  while (ei < extras.length) result.push(extras[ei++]);
  return result;
}

export default function PhotosPage() {
  const kidsPhotos = readPhotos('kindertraining');
  const aussenPhotos = readPhotos('aussen');
  const clubPhotos = interleaveEveryFourth(readPhotos('club-fotos'), aussenPhotos);
  const geschichtePhotos = readPhotos('geschichte');
  const besuchePhotos = readPhotos('besuche');
  const highlightsPhotos = readPhotos('highlights');

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Fotogalerie</h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
          Eindrücke aus unserem Training und Vereinsleben bei KSL Boxing Lahr.
        </p>
        <PhotoGallery
          kidsPhotos={kidsPhotos}
          clubPhotos={clubPhotos}
          geschichtePhotos={geschichtePhotos}
          besuchePhotos={besuchePhotos}
          highlightsPhotos={highlightsPhotos}
          kidsVideos={kidsVideos}
          clubVideos={clubVideos}
          geschichteVideos={geschichteVideos}
        />
      </div>
    </main>
  );
}
