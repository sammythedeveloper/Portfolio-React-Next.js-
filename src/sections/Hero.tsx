import memojimage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image
            src={memojimage}
            className="size-[100px]"
            alt="Person Peeking"
          />
          <div className="bg-gray-950 borde border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg  " >
            <div className="bg-green-500 size-2.5 rounded-full    " ></div>
            <div className=" text-sm font-medium  ">Available for new projects</div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8   " >Building Exceptional user Experiences</h1>
        <p>
          Building in transforming design into functional,high-performing web
          applications.Let's discuss your next project
        </p>
      </div>
      <button>
        <span>Explore My Work Here</span>
        <ArrowDown />
      </button>
      <button>
        <span>👋🏽</span>
        <span>Let's connect</span>
      </button>
    </div>
  );
};
