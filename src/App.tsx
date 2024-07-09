import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  UserRoundPlus,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestInputOpen(true);
  }
  function closeGuestsInput() {
    setIsGuestInputOpen(false);
  }
  return (
    <div className=" h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full pl-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Planner" />
          <p className="text-zinc-300 text-lg">
            Invite your friends and plan your next trip!
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                name=""
                placeholder="You are where to go?"
                id=""
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                disabled={isGuestInputOpen}
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                name=""
                placeholder="When?"
                id=""
                className="bg-transparent text-lg placeholder-zinc-400 outline-none  w-40"
                disabled={isGuestInputOpen}
              />
            </div>
            <div className="w-px h-6 bg-zinc-800"></div>
            {isGuestInputOpen ? (
              <button
                onClick={closeGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded-xl px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Change location/date
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="bg-lime-300 text-lime-950 rounded-xl px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                onClick={openGuestsInput}
              >
                Continue
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>
          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  type="text"
                  name=""
                  placeholder="Who will be on the trip?"
                  id=""
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="w-px h-6 bg-zinc-800"></div>
              <button className="bg-lime-300 text-lime-950 rounded-xl px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirm trip
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm  text-zinc-50">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos
          <a className="text-zinc-300 underline" href="">
            termos de uso
          </a>
          e
          <a className="text-zinc-300 underline" href="">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
