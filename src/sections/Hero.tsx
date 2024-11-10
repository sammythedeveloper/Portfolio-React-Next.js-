import memojimage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StartIcon from "@/assets/icons/star.svg";
export const HeroSection = () => {
  return (
    <div className="py-32 m:py-48 lg:py-60 relative z-0 overflow-x-clip ">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-red-500 size-[800px]">
        <div className="border border-red-500 inline-flex animate-spin [animation-duration:5s]  ">
          <StartIcon className=" size-28 text-emerald-300" />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image
            src={memojimage}
            className="size-[100px]"
            alt="Person Peeking"
          />
          <div className="bg-gray-950 borde border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg  ">
            <div className="bg-green-500 size-2.5 rounded-full    "></div>
            <div className=" text-sm font-medium  ">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide ">
            Building Exceptional user Experiences
          </h1>
          <p className=" mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming design into functional,high-performing
            web applications.Let's discuss your next project
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
        <button className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work Here</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>👋🏽</span>
          <span>Let's connect</span>
        </button>
      </div>
    </div>
  );
};
