function App() {
  return (
    <>
      <div className="flex background h-screen">
        <div className="w-1/4"></div>
        <div className="flex-col text-white w-3/4">
          <div className="h-1/4"></div>
          <div className="flex-col">
            <div className="flex">
              <h1 className="font-roboto font-display text-5xl ">Hi I'm</h1>
              <h1 className="font-roboto font-display text-5xl ml-3.5 italic">
                Archie
              </h1>
            </div>
            <h1 className="font-roboto font-display text-5xl">
              A Front-End Web Developer
            </h1>
            <p className="font-roboto opacity-40 mt-5">Recent Interactive Media Graduate Based In London, UK</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
