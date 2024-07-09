function App() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full pl-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <input
            type="text"
            name=""
            placeholder="You are where to go?"
            id=""
            className="bg-transparent text-lg placeholder-zinc-400"
          />
          <input
            type="text"
            name=""
            placeholder="When?"
            id=""
            className="bg-transparent text-lg placeholder-zinc-400"
          />
          <button>More</button>
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
