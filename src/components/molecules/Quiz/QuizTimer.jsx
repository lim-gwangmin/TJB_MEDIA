import React from 'react';

import { Box } from '@components/atoms/Box';
import { Timer } from '@components/atoms/Quiz';

export default function QuizTimer({ initialTime, onTimeUp, play }) {
  return (
    <Box>
      <Timer initialTime={initialTime} onTimeUp={onTimeUp} play={play} />
    </Box>
  );
}
