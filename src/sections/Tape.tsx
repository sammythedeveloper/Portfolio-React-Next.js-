import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Search Optimized",
  "Usable",
  "Reliable",
];

interface SectionProps {
  id: string;
}



export const TapeSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <div className="py-16 lg:py-24 over-flow-x-clip " id={id} >
      <div className=" bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1 ">
        <div className=" flex [mask-image:liner-gradient(to_right,transparent,black_90%,transparent)] ">
          <div className=" flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] ">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className=" text-gray-900 uppercase font-extrabold text-sm">
                      {word} 
                    </span>
                    <StartIcon className=" size-6 text-gray-900 -rotate-12 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
