'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export default function PhotoGallery({ kidsPhotos, clubPhotos, geschichtePhotos = [] }) {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const all = [
    ...kidsPhotos.map(src => ({ src, label: 'Kindertraining' })),
    ...clubPhotos.map(src => ({ src, label: 'Boxclub' })),
    ...geschichtePhotos.map(src => ({ src, label: 'Geschichte' })),
  ];

  const displayed = filter === 'all' ? all : all.filter(p => p.label === filter);

  const filters = [
    { key: 'all', label: 'Alle' },
    { key: 'Kindertraining', label: 'Kindertraining' },
    { key: 'Boxclub', label: 'Boxclub' },
    { key: 'Geschichte', label: 'Geschichte' },
  ];

  return (
    <>
      <div className="flex gap-2 mb-10 flex-wrap">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors duration-200 ${
              filter === f.key
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {displayed.length === 0 ? (
        <p className="text-muted-foreground text-center py-20">Noch keine Fotos vorhanden.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((photo, index) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelected(photo)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="inline-block bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
          <button
            onClick={() => setSelected(null)}
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>
          {selected && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={selected.src}
              alt={selected.label}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
