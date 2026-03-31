'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NewsCard = ({ title, date, author, preview, link }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="bg-card text-card-foreground border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">{preview}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button
            variant="outline"
            className="w-full transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-[0.98]"
            onClick={() => router.push(link)}
          >
            Weiterlesen
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default NewsCard;
