import { User, X } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (ownerName: string) => void;
  setOwnerEmail: (ownerEmail: string) => void;
}

export default function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60  flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900  space-y-5">
        <div className="space-y-2">
          <div className=" flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirm trip creation</h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            To complete your trip to{" "}
            <span className="font-semibold text-zinc-100">
              São Paulo, Brasil{" "}
            </span>
            from{" "}
            <span className="font-semibold text-zinc-100">
              August 16 to 27, 2024{" "}
            </span>
            please fill in your details below:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 py-2.5 flex-1  p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              name="name"
              placeholder="Enter full name"
              id=""
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </div>
          <div className="h-14 py-2.5 flex-1  p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Enter person email"
              id=""
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={(event) => setOwnerEmail(event.target.value)}
            />
          </div>

          <Button type="submit" size="full">
            Confirm Trip Creation
          </Button>
        </form>
      </div>
    </div>
  );
}
