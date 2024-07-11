import {
  ArrowRight,
  Calendar,
  MapPin,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestsModal from "./invite-guests-modal";

function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }
  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }
  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    if (!email) {
      return;
    }
    if (emailsToInvite.includes(email)) {
      return;
    }
    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }

  function removeEmailsFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );
    setEmailsToInvite(newEmailList);
  }

  function createTrip() {
    navigate("/trips/123");
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
                disabled={isGuestsInputOpen}
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
                disabled={isGuestsInputOpen}
              />
            </div>
            <div className="w-px h-6 bg-zinc-800"></div>
            {isGuestsInputOpen ? (
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
          {isGuestsInputOpen && (
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

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailsFromInvites={removeEmailsFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
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

            <form onSubmit={addNewEmailToInvite} className="space-y-3">
              <div className="h-14 py-2.5 flex-1  p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  name="name"
                  placeholder="Enter full name"
                  id=""
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
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
                />
              </div>
              <button
                type="submit"
                onClick={createTrip}
                className="bg-lime-300 w-full justify-center text-lime-950 rounded-xl px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Confirm Trip Creation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateTripPage;
