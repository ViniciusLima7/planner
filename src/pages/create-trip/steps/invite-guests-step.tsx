import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export default function InviteGuestsStep({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        onClick={openGuestsModal}
        type="button"
        className="flex items-center gap-2 flex-1 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} invited guests
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Who will be on the trip?
          </span>
        )}
      </button>
      <div className="w-px h-6 bg-zinc-800"></div>
      <button
        type="button"
        onClick={openConfirmTripModal}
        className="bg-lime-300 text-lime-950 rounded-xl px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
      >
        Confirm trip
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
