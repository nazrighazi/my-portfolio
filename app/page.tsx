import TypedAnimation from "@/components/TypedAnimation";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const roleSequence: (string | number)[] = [
  "Front-End Developer",
  1000,
  "Back-End Developer",
  1000,
  "Full-Stack Developer",
  1000,
];

export default function Home() {
  return (
    <main className="container mx-auto h-full w-full px-[16px]">
      <section className="flex flex-col xl:flex-row items-center justify-between  xl:pt-24 w-full h-full">
        <div className="text-center xl:text-left flex flex-col text-white">
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

          <h1 className="xl:leading-normal font-montserrat pb-3 text-sm xl:text-lg">
            Working with my hands to make magic happen on the internet.
          </h1>
          <h1 className="xl:leading-normal font-montserrat text-sm xl:text-lg">
            Creating beautiful and engaging digital experiences in Kuala Lumpur,
            Malaysia
          </h1>
        </div>
      </section>
    </main>
  );
}
