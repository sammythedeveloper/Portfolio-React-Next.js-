"use client";
import { useRef } from "react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import Typescript from "@/assets/icons/TypeScript.svg";
import React from "@/assets/icons/react.svg";
import Photoshop from "@/assets/icons/Adobe-Photoshop.svg";
import Github from "@/assets/icons/github.svg";
import NodeJs from "@/assets/icons/Node.js.svg";
import Bootstrap from "@/assets/icons/Bootstrap.svg";
import Tailwind from "@/assets/icons/Tailwind-CSS.svg";
import Next from "@/assets/icons/Next.js.svg";
import MongoDB from "@/assets/icons/MongoDB.svg";
import Git from "@/assets/icons/Git.svg";
import VSC from "@/assets/icons/Visual-Studio-Code-(VS-Code).svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/coder.png";
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/Toolboxitems";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: Typescript,
  },
  {
    title: "Photoshop",
    iconType: Photoshop,
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
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "Tailwind",
    iconType: Tailwind,
  },
  {
    title: "Next ",
    iconType: Next,
  },
  {
    title: "MongoDB",
    iconType: MongoDB,
  },
  {
    title: " VSC ",
    iconType: VSC,
  },
  {
    title: "Git",
    iconType: Git,
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
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 ">
      <div className=" container ">
        <SectionHeader
          eyebrows="About me"
          title="A Glimpse into my world"
          description="Learn more about who i am,what inspire me."
        />
        <div className="mt-20 flex flex-col gap-8 ">
          <div className=" grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3  ">
            <Card className=" h-[320px] md:col-span-2 lg:col-span-1  ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className=" w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Vover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2  ">
              <CardHeader
                title="My Toolbox"
                description=" Explore the technologies and tools I use to craft expceptional
                digital experience"
                className=""
              />
              <Toolboxitems
                items={toolboxItems}
                className=""
                itemsWrapperClassName=" animate-move-left [animation-duration:50s]"
              />
              <Toolboxitems
                items={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName=" animate-move-right [animation-duration:40s]"
              />
            </Card>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8  ">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2  ">
              <CardHeader
                title="Beyond the code"
                description=" Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hoobies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className=" inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className=" font-medium text-grey-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 ">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-left-top"
              />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]     "></div>
                <Image src={smileMemoji} alt="smiling" className=" size-20 " />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
