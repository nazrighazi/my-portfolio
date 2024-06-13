"use client";

import ImageAnimation from "@/components/ImageAnimation";
import SliderAnimation from "@/components/SliderAnimation";
import TypedAnimation from "@/components/TypedAnimation";

const roleSequence: (string | number)[] = [
  "Front-End Developer",
  1500,
  "Back-End Developer",
  1500,
  "Full-Stack Developer",
  1500,
];

const mouseScrollAnimation = {
  animate: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export default function Home() {
  return (
    <div className="h-screen scroll-smooth snap-mandatory snap-y overflow-y-auto overflow-x-hidden flex flex-col gap-6">
      <section
        id="hero"
        className="snap-start shrink-0  container mx-auto flex flex-col  xl:flex-row items-center justify-between  pt-24 w-full h-[100vh] relative"
      >
        <div className=" px-[16px]  text-center xl:text-left flex flex-col text-white">
          <h1 className="font-semibold text-5xl lg:text-6xl xl:text-8xl leading-relaxed font-montserrat">
            Hi, I&apos;m
          </h1>
          <h1 className="font-montserrat font-semibold text-5xl lg:text-6xl xl:text-8xl ">
            Nazri <span className="text-indigo-700">Ghazi</span>
          </h1>

          <TypedAnimation
            itemSequence={roleSequence}
            className="leading-loose py-4"
          ></TypedAnimation>

          <h1 className="xl:leading-normal font-montserrat pb-3 text-sm xl:text-xl">
            Working with my hands to make magic happen on the internet.
          </h1>
          <h1 className="xl:leading-normal font-montserrat text-sm xl:text-xl">
            Creating beautiful and engaging digital experiences in Kuala Lumpur,
            Malaysia.
          </h1>
        </div>

        <ImageAnimation
          variants={mouseScrollAnimation}
          src="/scroll.png"
          className="absolute bottom-14 left-0 right-0 ml-auto mr-auto z-[60] h-[60px] xl:h-auto"
        />
        {/* moving bottom text */}
        <div className="hidden xl:inline-block absolute bottom-[-75px] left-0 w-[50%] text-header font-montserrat font-semibold text-[200px] whitespace-nowrap">
          <SliderAnimation item="Front-End Back-End Full-Stack"></SliderAnimation>
        </div>
      </section>

      <section
        id="projectStats"
        className="snap-start shrink-0 w-full h-[100vh] container mx-auto px-[16px] "
      >
        <p className="text-white">Hello</p>
      </section>
    </div>
  );
}
