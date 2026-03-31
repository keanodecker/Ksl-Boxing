'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const GroupCard = ({ image, name, description, detailsLink, timesLink, index = 0 }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="bg-card text-card-foreground border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
        <CardFooter className="flex gap-2 mt-auto">
          <Button
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
            onClick={() => router.push(detailsLink)}
          >
            Details
          </Button>
          <Button
            variant="outline"
            className="flex-1 transition-all duration-200 hover:bg-secondary hover:text-secondary-foreground active:scale-[0.98]"
            onClick={() => router.push(timesLink)}
          >
            Trainingszeiten
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default GroupCard;
