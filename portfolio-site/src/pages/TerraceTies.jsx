import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ImageCarouselItem from "../components/ImageCarouselItem";
import { FiGithub } from "react-icons/fi";
import { PiReadCvLogoBold } from "react-icons/pi";
import ConnectButton from "../components/ConnectButton";

const oldImages = [
  {
    id: "1",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/1.png",
    altText:
      "Screenshot of the Terrace Ties app home screen with minimal styling",
  },
  {
    id: "2",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/2.png",
    altText: "Screenshot showing the login page of the Terrace Ties app",
  },
  {
    id: "3",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/3.png",
    altText: "Screenshot of the registration form in the Terrace Ties app",
  },
  {
    id: "4",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/4.png",
    altText:
      "Screenshot displaying the main feed with placeholder content in the Terrace Ties app",
  },
  {
    id: "5",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/5.png",
    altText:
      "Screenshot of the user profile page in the early version of the Terrace Ties app",
  },
  {
    id: "6",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/6.png",
    altText: "Screenshot showing the settings page of the Terrace Ties app",
  },
  {
    id: "7",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/7.png",
    altText:
      "Screenshot of the chat or messaging feature in the Terrace Ties app",
  },
  {
    id: "8",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/8.png",
    altText:
      "Screenshot displaying a list of football teams in the Terrace Ties app",
  },
  {
    id: "9",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_old_ui/9.png",
    altText: "Screenshot of the Terrace Ties app showing a match details page",
  },
];

const newImages = [
  {
    id: "1",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/1.png",
    altText:
      "Screenshot of the redesigned Terrace Ties app home screen with updated UI elements",
  },
  {
    id: "2",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/2.png",
    altText:
      "Screenshot of the modern login page in the updated Terrace Ties app",
  },
  {
    id: "3",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/3.png",
    altText:
      "Screenshot showing the improved registration form in the new Terrace Ties app UI",
  },
  {
    id: "4",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/4.png",
    altText:
      "Screenshot of the main feed with enhanced visuals in the updated Terrace Ties app",
  },
  {
    id: "5",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/5.png",
    altText:
      "Screenshot of the user profile page with new design elements in the Terrace Ties app",
  },
  {
    id: "6",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/6.png",
    altText:
      "Screenshot showing the redesigned settings page in the Terrace Ties app",
  },
  {
    id: "7",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/7.png",
    altText:
      "Screenshot of the chat or messaging feature with updated interface in the Terrace Ties app",
  },
  {
    id: "8",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/8.png",
    altText:
      "Screenshot displaying a list of football teams with improved layout in the Terrace Ties app",
  },
  {
    id: "9",
    imageLink: "/images/project-images/TerraceTies/terrace_ties_new_ui/9.png",
    altText:
      "Screenshot of the match details page with new UI in the Terrace Ties app",
  },
];

//to-do, find images and add them to array to be scrolled through by carousel fialise Terrace ties page, also change video format of trip down under to youtube

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
            <p>
              Please enjoy my brief coverage of possibly my favourite project,
              If you would like to go into more detail check out the
              documenetation and the repo!
            </p>

            <div className="flex gap-5 list-none">
              <ConnectButton
                icon={<FiGithub className="size-10" />}
                infoTag={"Repo"}
                marLeft={"ml-[-2px]"}
                dest={"https://github.com/ArchieBett175/TerraceTies"}
              />

              <ConnectButton
                icon={<PiReadCvLogoBold className="size-10" />}
                infoTag={"Documentation"}
                marLeft={"ml-[-40px]"}
                dest={
                  "https://drive.google.com/file/d/1Wxz5BHC3WHDB2MJa8qvN8qT5etn1fEAi/view"
                }
              />
            </div>
          </div>
          <hr />

          <div className="w-full flex flex-col mx-auto">
            <div className="w-68 max-w-md mx-auto aspect-[8/16]">
              <Carousel
                isVisible={true}
                items={oldImages}
                carouselItem={ImageCarouselItem}
              />
            </div>
            <p className="text-center text-lg mt-10">
              Here are some screenshots of the application at first launch,
              being the complete barebones and having little to no styling.
            </p>
            <div className="w-68 max-w-md mx-auto aspect-[8/16] mt-10">
              <Carousel
                isVisible={true}
                items={newImages}
                carouselItem={ImageCarouselItem}
              />
            </div>
            <p className="text-center text-lg mt-10">
              Here are a few examples of the redesigned Ui of the app created in
              Figma, it takes a more modern and user friendly approach, whilst
              sticking to a colour scheme and showcasing all the information
              needed. If you would like to have a hands on with the new UI click{" "}
              <span className="text-blue-500 underline hover:text-amber-300">
                <a
                  href="https://www.figma.com/design/L5EIstN8MpVBbC3EWrMhEQ/Terrace-ties-revamped?node-id=0-1&t=9fjvDGQaeuOEcros-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here{" "}
                </a>
              </span>
              for the Figma file.
            </p>
          </div>
          <hr />
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
