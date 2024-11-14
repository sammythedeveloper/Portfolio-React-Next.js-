import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTML5 from "@/assets/icons/html5.svg";
import React from "@/assets/icons/react.svg";
import CSS3 from "@/assets/icons/css3.svg";
import Github from "@/assets/icons/github.svg";
import NodeJs from "@/assets/icons/Node.js.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/Toolboxitems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5,
  },
  {
    title: "CSS3",
    iconType: CSS3,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "NodeJs",
    iconType: NodeJs,
  },
  {
    title: "Github",
    iconType: Github,
  },
];
const hoobies = [
  {
    title: "Photography",
    emoji: " 📷",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Videoediting",
    emoji: "🎥",
    left: "10%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gym",
    emoji: "💪",
    left: "70%",
    top: "45%",
  },
  {
    title: "Jazz Music",
    emoji: "🎺",
    left: "5%",
    top: "65%",
  },
  {
    title: "Technology",
    emoji: "💻",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className=" container ">
        <SectionHeader
          eyebrows="About me"
          title="A Glimpse into my world"
          description="Learn more about who i am,what inspire me."
        />
        <div className="mt-20 flex flex-col gap-8 ">
          <Card className=" h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className=" w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Vover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description=" Explore the technologies and tools I use to craft expceptional
                digital experience"
              className="px-6 pt-6 "
            />
            <Toolboxitems items={toolboxItems} className="mt-6" />
            <Toolboxitems
              items={toolboxItems}
              className="mt-6 "
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the code"
              description=" Explore my interests and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hoobies.map((hobby) => (
                <div
                  key={hobby.title}
                  className=" inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top, 
                  }}
                >
                  <span className=" font-medium text-grey-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0" >
            <Image src={mapImage} alt="map" className="h-full w-full object-left-top" />
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 " >
              <Image src={smileMemoji} alt="smiling" className=" size-20 " />
              </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
