
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ExpEduComp from "./components/ExpEduComp";

function App() {

  return (
    <>
      <div className="flex-col background h-screen"> 
        <div className="h-1/12"></div>
        <NavBar />
        <div className="h-1/6"></div>
        <Hero />
        <div className="h-1/6"></div>
        <ExpEduComp/>
        <div className="p-10 bg-black"></div>
        {/* Div for Bento Grid */}
        <div className="h-530 max-sm:h-360 w-full flex items-center justify-center bg-black md:h-screen">
          <div
            className="w-[1164px] h-full   auto-rows-[minmax(0,1fr)]
              grid-cols-10 gap-3 p-10
              flex-col 
              max-lg:grid-cols-8
              md:grid max-md:flex max-md:gap-3
              "
          >
            <div
              className="col-start-1 col-end-4 row-start-1 row-end-4 bg-red-500 
            rounded-xl max-md:h-125 max-sm:h-75"
            >
              <div className="flex h-full w-full flex-col">
                <div>
                  <button>
                    Terrace Ties
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-start-1 col-end-4 row-start-4 row-end-5
            rounded-xl grid grid-cols-3 gap-3 max-md:h-50 max-sm:h-25"
            >
              <div className="col-span-1 bg-blue-400 rounded-xl"></div>
              <div className="col-span-1 bg-blue-500 rounded-xl"></div>
              <div className="col-span-1 bg-blue-600 rounded-xl"></div>
            </div>
            <div
              className="col-start-6 col-end-11 row-start-1 row-end-4 bg-amber-700 
            rounded-xl max-lg:col-start-4 max-lg:col-end-9 max-md:h-65 max-sm:h-40"
            ></div>
            <div
              className="col-start-6 col-end-11 row-start-4 row-end-5 bg-stone-700 
            rounded-xl max-lg:col-start-4 max-lg:col-end-9 max-md:h-30 max-sm:h-25"
            ></div>
            <div
              className="col-start-4 col-end-6 row-start-1 row-end-3 bg-purple-600 
            rounded-xl max-lg:col-start-1 max-lg:col-end-5 max-lg:row-start-5 
            max-lg:row-end-7 max-md:h-30 max-sm:h-25 "
            ></div>
            <div
              className="col-start-4 col-end-6 row-start-3 row-end-5 bg-slate-700
            rounded-xl max-lg:col-start-5 max-lg:col-end-9 max-lg:row-start-8 
            max-lg:row-end-10 max-md:h-30 max-sm:h-25"
            ></div>
            <div
              className="col-start-1 col-end-6 row-start-5 row-end-8 bg-green-500 
            rounded-xl max-lg:col-end-5 max-lg:row-start-7 max-lg:row-end-10 max-md:h-65
            max-sm:h-40"
            ></div>
            <div
              className="col-start-6 col-end-11 row-start-5 row-end-8 bg-pink-700 
            rounded-xl max-lg:col-start-5 max-lg:col-end-9 max-md:h-65 max-sm:h-40"
            ></div>
            <div
              className="col-start-1 col-end-11 row-start-8 row-end-9 bg-cyan-700 
            rounded-xl max-lg:col-end-9 max-lg:row-start-10 max-lg:row-end-11 max-md:h-25
            max-sm:h-15"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
