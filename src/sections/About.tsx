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
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Videoediting",
    emoji: "🎥",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Gym",
    emoji: "💪🏋️",
  },
  {
    title: "Jazz Music",
    emoji: "🎺",
  },
  {
    title: "Technology",
    emoji: "💻",
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
          <Card className="h-[320px] p-0" >
            <CardHeader
              title="My Toolbox"
              description=" Explore the technologies and tools I use to craft expceptional
                digital experience"
              className="px-6 pt-6 "
            />
            <Toolboxitems items={toolboxItems} className="mt-6" />
            <Toolboxitems items={toolboxItems} className="mt-6 "
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the code"
              description=" Explore my interests and hobbies bryond the digital realm"
            />
            <div>
              {hoobies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling" />
          </Card>
        </div>
      </div>
    </div>
  );
};
