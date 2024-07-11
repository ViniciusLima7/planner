import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">São Paulo, Brasil</span>
        </div>

        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">August 16 to 27</span>
          </div>
          <div className="w-px h-6 bg-zinc-800"></div>
          <button className="bg-zinc-800 text-zinc-200 rounded-xl px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Change location/date
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16  px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Activities</h2>
            <button
              onClick={openCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Register activity
            </button>
          </div>
          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex  gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold ">
                  Day 17
                </span>
                <span className=" text-xs text-zinc-500">Saturday</span>
              </div>
              <p className="text-sm text-zinc-500">
                No activity registered on that date
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex  gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold ">
                  Day 18
                </span>
                <span className=" text-xs text-zinc-500">Monday</span>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">English in Group</span>
                  <span className="text-zinc-400 text-sm ml-auto">8:00h</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Meditation</span>
                  <span className="text-zinc-400 text-sm ml-auto">7:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
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
          <div className="w-full h-px bg-zinc-800" />
          <div>
            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Guests</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      Vinicius Lima
                    </span>
                    <span className="block text-sm text-zinc-400 truncate ">
                      v7web@teste.com
                    </span>
                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">
                      Daiani Noronnha
                    </span>
                    <span className="block text-sm text-zinc-400 truncate ">
                      daidev@test.com
                    </span>
                  </div>
                  <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
              </div>
              <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-xl px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <UserCog className="size-5" />
                Manager Guests
              </button>
            </div>
          </div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
