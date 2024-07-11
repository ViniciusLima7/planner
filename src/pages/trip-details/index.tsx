import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";

export default function TripDetailsPage() {
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
            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
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
        <div className="w-80"></div>
      </main>
    </div>
  );
}
