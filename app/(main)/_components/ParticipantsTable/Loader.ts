import { prisma } from '~/utils/db';
import { safeLoader } from '~/lib/data-mapper/safeLoader';
import { z } from 'zod';

const ParticipantValidation = z.array(
  z.object({
    id: z.string(),
    identifier: z.string(),
  }),
);

export const safeLoadParticipants = safeLoader({
  outputValidation: ParticipantValidation,
  loader: () => prisma.participant.findMany(),
});
