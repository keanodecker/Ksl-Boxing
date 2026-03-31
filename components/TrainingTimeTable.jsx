'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const TrainingTimeTable = ({ group, schedule }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-card text-card-foreground border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{group}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="font-semibold text-primary min-w-[100px]">
                    {item.day}
                  </div>
                  <div className="text-secondary-foreground">
                    {item.time}
                  </div>
                </div>
                {item.note && (
                  <div className="text-sm text-muted-foreground italic">
                    {item.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TrainingTimeTable;
