'use client';

import { motion } from 'framer-motion';
import { INITIAL_TILES, TilePreview } from '@/entities/tile';
import { Card } from '@/shared/ui/Card/Card';
import { Typography } from '@/shared/ui/Typography/Typography';

export const TileShowcase = () => {
  return (
    <div className="space-y-6">
      <Typography variant="h3">Available Tiles</Typography>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {INITIAL_TILES.map((tile, index) => (
          <motion.div
            key={tile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="flex flex-col h-full justify-between">
              <TilePreview tile={tile} />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TileShowcase;
