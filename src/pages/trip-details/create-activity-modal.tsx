import { Calendar, Tag, X } from "lucide-react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export default function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60  flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900  space-y-5">
        <div className="space-y-2">
          <div className=" flex items-center justify-between">
            <h2 className="text-lg font-semibold">Register Activity</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            All guests can view the activities
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 py-2.5 flex-1  p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="activity"
              placeholder="What your activity?"
              id=""
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14  flex-1  px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Date and hour activity"
                id=""
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-lime-300 w-full justify-center text-lime-950 rounded-xl px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Save Trip
          </button>
        </form>
      </div>
    </div>
  );
}
