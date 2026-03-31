'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, role, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="bg-secondary text-secondary-foreground border-border h-full flex flex-col">
        <CardContent className="pt-6 flex-grow">
          <Quote className="w-10 h-10 text-primary mb-4" />
          <blockquote className="text-lg leading-relaxed mb-6 italic">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
