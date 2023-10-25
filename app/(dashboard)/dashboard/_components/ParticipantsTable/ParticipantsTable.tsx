'use client';

import { api } from '~/trpc/client';
import { DataTable } from '~/components/DataTable/DataTable';
import { ParticipantColumns } from '~/app/(dashboard)/dashboard/_components/ParticipantsTable/Columns';
import ImportCSVModal from '~/app/(dashboard)/dashboard/participants/_components/ImportCSVModal';
import ExportCSVParticipants from '~/app/(dashboard)/dashboard/participants/_components/ExportCSVParticipants';
import type { ParticipantWithInterviews } from '~/shared/types';
import { Settings } from 'lucide-react';
import { ActionsDropdown } from '~/app/(dashboard)/dashboard/_components/ParticipantsTable/ActionsDropdown';
import { DeleteAllParticipantsButton } from '../../participants/_components/DeleteAllParticipantsButton';
import AddParticipantButton from '~/app/(dashboard)/dashboard/participants/_components/AddParticipantButton';

export const ParticipantsTable = ({
  initialData,
}: {
  initialData: ParticipantWithInterviews[];
}) => {
  const {
    isLoading,
    // refetch,
    data: participants,
  } = api.participant.get.all.useQuery(undefined, {
    initialData,
    refetchOnMount: false,
    onError(error) {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  return (
    <>
      <div className="flex gap-2">
        <AddParticipantButton existingParticipants={participants} />
        <ImportCSVModal />
        <ExportCSVParticipants participants={participants} />
        <DeleteAllParticipantsButton />
      </div>
      {isLoading && <div>Loading...</div>}
      <DataTable
        columns={ParticipantColumns()}
        data={participants}
        filterColumnAccessorKey="identifier"
        /// handleDeleteSelected={handleDelete}
        actions={[
          {
            id: 'actions',
            header: () => <Settings />,
            cell: ({ row }) => {
              return <ActionsDropdown row={row} participants={participants} />;
            },
          },
        ]}
      />
    </>
  );
};
