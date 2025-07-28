import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ImageCarouselItem from "../components/ImageCarouselItem";

const images = [
  {
    id: "1",
    imageLink: "/images/project-images/TerraceTies/football_crowd_cover.jpg",
    altText: "football stadium",
  },
  {
    id: "2",
    imageLink: "/images/project-images/TerraceTies/football_crowd_cover.jpg",
    altText: "football stadium",
  },
];

//to-do, find images and add them to array to be scrolled through by carousel fialise Terrace ties page

const TerraceTies = () => {
  return (
    <>
      <div className="bg-black h-fit w-full background_two justify-center flex">
        <div className="md:w-3/5 w-full flex flex-col  mt-30 text-zinc-100 gap-15 mx-10 md:mx-0 mb-10">
          <h1 className="text-2xl text-zinc-500 font-bold">
            2024 - First Class Grade Received
          </h1>
          <div className="-mt-10">
            <img
              src="/images/project-images/TerraceTies/football_crowd_cover.jpg"
              alt="A large scaping image of a crowd at a football stadium"
              className="w-full h-50 object-cover rounded-2xl shadow-[1px_1px_29px_14px_rgba(252,54,219,0.3)]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-roboto font-medium ">Terrace Ties</h1>
            <h2 className="text-xl text-zinc-400">
              A Self contained Android App made to connect and bring lower
              league football fans closer together
            </h2>
            <hr />
          </div>

          <div className="text-lg flex flex-col gap-5 leading-8">
            <p>
              My Application was created using android studio and Kotlin, whilst
              i completed an initial styling and working app, a lot of work has
              gone on since to ensure that my app was up to my specification and
              works like a charm i am still yet to implement the new UI into the
              app but it has been designed and perfected on Figma.
            </p>
            <p>
              On this page i will walk you through my process and showcase some
              images from the final piece.
            </p>
            <p> Please read and enjoy...</p>
          </div>
          <hr />

          <Carousel
            isVisible={true}
            items={images}
            carouselItem={ImageCarouselItem}
          />

          <div>
            <h2 className="text-3xl font-roboto font-semibold">Background</h2>
            <p></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TerraceTies;
