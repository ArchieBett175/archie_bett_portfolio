import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ExpEduComp from "./components/ExpEduComp";
import Bento from "./components/Bento";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex-col background h-screen">
        <div className="h-1/12"></div>
        <NavBar />
        <div className="h-1/6"></div>
        <Hero />
        <div className="h-1/6"></div>
        <ExpEduComp />
        <div className="p-10 bg-black"></div>
        <Bento />
        <div className="p-10 bg-black"></div>
        <BlogSection />
        <div className="p-10 bg-zinc-700"></div>
        <Footer />
      </div>
    </>
  );
}

//to-do, blog - create, project pages - create links

export default App;
