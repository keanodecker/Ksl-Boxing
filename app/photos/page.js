'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { url: 'https://images.unsplash.com/photo-1695292007578-583aeda2729a', title: 'Training im Ring' },
    { url: 'https://images.unsplash.com/photo-1601039834205-4e3f1e932f5a', title: 'Wettkampfvorbereitung' },
    { url: 'https://images.unsplash.com/photo-1702667752618-0f347ec02f74', title: 'Fitness-Boxen' },
    { url: 'https://images.unsplash.com/photo-1475670033737-f3bfd43d2d29', title: 'Gruppentraining' },
    { url: 'https://images.unsplash.com/photo-1638851240443-762225963c29', title: 'Jugendtraining' },
    { url: 'https://images.unsplash.com/photo-1679500502523-b40fb6f0563d', title: 'Techniktraining' },
    { url: 'https://images.unsplash.com/photo-1679500683809-35c8236381b6', title: 'Sparring' },
    { url: 'https://images.unsplash.com/photo-1697240666845-6095e2425870', title: 'Sandsacktraining' },
    { url: 'https://images.unsplash.com/photo-1517438322307-e67111335449', title: 'Frauenboxen' },
    { url: 'https://images.unsplash.com/photo-1617629790501-6df2d6ac9822', title: 'Kindertraining' },
    { url: 'https://images.unsplash.com/photo-1593352217070-4900df41715b', title: 'Trainingsraum' },
    { url: 'https://images.unsplash.com/photo-1695292007578-583aeda2729a', title: 'Wettkampf' }
  ];

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fotogalerie</h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl">
            Eindrücke aus unserem Training, von Wettkämpfen und Vereinsveranstaltungen. Erleben Sie die Atmosphäre bei KSL Boxing Lahr.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(photo)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">{photo.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          {selectedImage && (
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-xl font-semibold">{selectedImage.title}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
