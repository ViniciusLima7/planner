import { Link2, Plus } from "lucide-react";

export default function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Important links</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva Airbainb
            </span>
            <a
              href="http://localhost:5173/trips/123"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              http://localhost:5173/trips/123fffffffffffffffssssssssssssfffffffffff
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva Futebol
            </span>
            <a
              href="http://localhost:5173/trips/123"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              http://localhost:5173/trips/123fffffffffffffffssssssssssssfffffffffff
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-xl px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
        <Plus className="size-5" />
        Register new link
      </button>
    </div>
  );
}
