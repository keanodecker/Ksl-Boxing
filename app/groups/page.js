import { readdirSync } from 'fs';
import { join } from 'path';
import GroupsContent from '@/components/GroupsContent';
import { kidsVideos } from '@/lib/videos-config';

export default function GroupsPage() {
  let kidsPhotos = [];
  try {
    kidsPhotos = readdirSync(join(process.cwd(), 'public/kindertraining'))
      .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort((a, b) => {
        const na = parseInt(a.match(/\d+/)?.[0] ?? '0', 10);
        const nb = parseInt(b.match(/\d+/)?.[0] ?? '0', 10);
        return na - nb;
      })
      .map(f => `/kindertraining/${f}`);
  } catch {
    // folder empty or missing
  }

  return <GroupsContent kidsPhotos={kidsPhotos} kidsVideos={kidsVideos} />;
}
