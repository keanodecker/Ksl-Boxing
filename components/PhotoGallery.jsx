'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Play } from 'lucide-react';

function ytThumb(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export default function PhotoGallery({
  kidsPhotos = [],
  clubPhotos = [],
  geschichtePhotos = [],
  kidsVideos = [],
  clubVideos = [],
  geschichteVideos = [],
}) {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  function interleave(photos, videos, label) {
    const p = photos.map(src => ({ type: 'photo', src, label }));
    const v = videos.map(x => ({ type: 'video', videoId: x.videoId, title: x.title, src: ytThumb(x.videoId), label }));
    const result = [];
    let vi = 0;
    p.forEach((photo, i) => {
      result.push(photo);
      if ((i + 1) % 5 === 0 && vi < v.length) result.push(v[vi++]);
    });
    while (vi < v.length) result.push(v[vi++]);
    return result;
  }

  // "Alle"-Ansicht: 2× Kindertraining-Foto, 1× Boxclub-Foto, 1× Kindertraining-Video, 1× Geschichte-Foto (wiederholt)
  function buildAllView() {
    const kp = kidsPhotos.map(src => ({ type: 'photo', src, label: 'Kindertraining' }));
    const cp = clubPhotos.map(src => ({ type: 'photo', src, label: 'Boxclub' }));
    const gp = geschichtePhotos.map(src => ({ type: 'photo', src, label: 'Geschichte' }));
    const kv = kidsVideos.map(x => ({ type: 'video', videoId: x.videoId, title: x.title, src: ytThumb(x.videoId), label: 'Kindertraining' }));
    const result = [];
    let ki = 0, ci = 0, gi = 0, vi = 0;
    while (ki < kp.length || ci < cp.length || gi < gp.length || vi < kv.length) {
      if (ki < kp.length) result.push(kp[ki++]);
      if (ki < kp.length) result.push(kp[ki++]);
      if (ci < cp.length) result.push(cp[ci++]);
      if (vi < kv.length) result.push(kv[vi++]);
      if (gi < gp.length) result.push(gp[gi++]);
    }
    return result;
  }

  const kidsItems = interleave(kidsPhotos, kidsVideos, 'Kindertraining');
  const clubItems = interleave(clubPhotos, clubVideos, 'Boxclub');
  const geschichteItems = interleave(geschichtePhotos, geschichteVideos, 'Geschichte');

  const displayed =
    filter === 'all' ? buildAllView() :
    filter === 'Kindertraining' ? kidsItems :
    filter === 'Boxclub' ? clubItems :
    geschichteItems;

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
        <p className="text-muted-foreground text-center py-20">Noch keine Inhalte vorhanden.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((item, index) => (
              <motion.div
                key={item.type === 'video' ? item.videoId : item.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelected(item)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.title || item.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play-Button für Videos – immer sichtbar */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 group-hover:bg-primary rounded-full p-4 transition-colors duration-200">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-black/60 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {item.type === 'video' ? '▶ ' + (item.title || 'Video') : item.label}
                  </span>
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
          {selected?.type === 'video' ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1`}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selected.title}
              />
            </div>
          ) : selected ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={selected.src} alt={selected.label} className="w-full h-auto rounded-lg" />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
