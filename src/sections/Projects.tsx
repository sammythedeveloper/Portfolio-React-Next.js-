import Finance from "@/assets/images/monify.png";
import Amazon from "@/assets/images/amazon.png";
import QandA from "@/assets/images/Q&A.png";
import Fourseason from "@/assets/images/fsb.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Movie from "@/assets/images/movie.png";
import Apple from "@/assets/images/apple.png";

const portfolioProjects = [
  {
    company: "SamVision ",
    year: "2025",
    title: "Four Season Studio",
    description:
      "Four Season Studio, the ultimate barber shop app designed to meet all your grooming needs with ease and style. looking for a quick trim, a fresh haircut, or a full grooming session, Four Season Studio offers a wide range of professional services tailored to your preferences.Book now ",
    results: [
      { title: "Browse Services" },
      { title: "Book Appointments" },
      { title: "Stay Updated" },
    ],
    link: "https://four-season-barbershop-tzwp.vercel.app/",
    github:"https://github.com/sammythedeveloper/four_season_barbershop",
    image: Fourseason,
  },
  {
    company: "SamVision ",
    year: "2025",
    title: "Monify",
    description:
      "Monfiy is a static frontend appliction that a create to record my personal finance, it is a simple tool designed to help users manage their expenses and gain better control over their financial habits. With an intuitive and user-friendly interface, the app allows users to easily add, categorize, and track their expenses in real-time. Whether it's groceries, bills, transportation, or entertainment, this app helps users monitor their spending habits, set budget goals, and make informed decisions to save money. ",
    results: [
      { title: "Track personal expenses" },
      { title: "Categorize and list expenses" },
      { title: "Boost money saving & spending by 80%" },
    ],
    link: "https://sammythedeveloper.github.io/monifyapp/",
    github:"https://github.com/sammythedeveloper/Monify",
    image: Finance,
  },
  {
    company: "Q&A CommunityHub",
    year: "2024",
    title: "Question and Answer Hub",
    description:
      "An interactive platform designed to facilitate knowledge-sharing and community-driven discussions for my highschool. students can easily ask questions, provide answers, and engage in discussions around various topics. The app features a streamlined user interface with secure sign-in and sign-up options, allowing users to create, vote on, and comment on questions and answers. ",
    results: [
      { title: "Building a community engage in discussions" },
      { title: "students can easily ask questions and provide answers." },
      { title: "Build using Next.js,React,NodeJs,Tailwind and MySql Database " },
    ],
    link: "https://sammythedeveloper.github.io/Q-A/",
    github:"https://github.com/sammythedeveloper/Q-A",
    image: QandA,
  },
  {
    company: "EvangadiTech",
    year: "2024",
    title: "Amazon Shopping",
    description:
      "A fully functional e-commerce platform inspired by the world-renowned Amazon marketplace. Built with modern web technologies, this clone replicates many of the core features of Amazon, providing users with a seamless shopping experience from adding items to the cart to payment processing at the checkout using stripe for payment system and firbase for authentication its semless experiance and one of a kind.",
    results: [
      { title: "React, Javascript, and Node plus an interactive design" },
      { title: "Secure User Authentication(Firebase)" },
      { title: "Payment Tokenization(Stripe)" },
    ],
    link: "https://sammythedeveloper.github.io/amazonclone-2023/",
    github:"https://github.com/sammythedeveloper/amazonclone-2023",
    image: Amazon,
  },
  {
    company: "Netflix",
    year: "2024",
    title: "Movie ",
    description: "Netflix is a dynamic platform where users can explore, review, and rate a wide array of movies. With an intuitive and user-friendly interface, users can easily browse through movie listings, read detailed reviews, and share their own opinions. Whether you're a casual viewer or a dedicated cinephile, Netflix provides a space for movie enthusiasts to engage, discuss, and rate films.",
    results: [
      { title: "Built with React and Tailwind CSS" },
      { title: "Fetch data (TMDb) API" },
      { title: "Post requests to review a movie" },
    ],
    link: "https://sammythedeveloper.github.io/netflix/", 
    github:"https://github.com/sammythedeveloper/netflix",
    image: Movie,
  },
  {
    company: "Apple Website",
    year: "2024",
    title: "Official Apple website ",
    description: "This is the offical apple frontend page that i did as a first project assignment while i was in evangaditech bootcamp.Build with just a simple react components and applying react props system to pass same property for children component,basically its a clone and a demo application.",
    results: [
      { title: "Built with React,Html and Css" },
      { title: "just a responsive offical apple website demo" },
    ],
    link: "https://sammythedeveloper.github.io/Apple_website_clone/",
    github:"https://github.com/sammythedeveloper/Apple_website_clone",
    image: Apple,
  },
];
interface SectionProps {
  id: string;
}

export const ProjectsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section className="pb-16 lg:py-24 " id={id}>
      <div className="container  ">
        <SectionHeader
          eyebrows="Real-world Results"
          title="Featured Projects"
          description="See how I transform concepts into engaging digital experiences."
        />
        <div className="flex justify-center ">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent"></p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center m-6"></h2>
        <p className=" text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto "></p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20 ">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 "
         
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mt-4 md:text-lg">
                    {project.description}
                  </p>{" "}
                  {/* Added description */}
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ml-2">
                      <span>View Live Site</span> {/* Updated text */}
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <a href={project.github}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-2 ml-2">
                      <span>Github </span> {/* Updated text */}
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
