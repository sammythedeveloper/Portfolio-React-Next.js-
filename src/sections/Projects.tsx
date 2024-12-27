import Finance from "@/assets/images/finance.jpg";
import Amazon from "@/assets/images/amazon.jpg";
import QandA from "@/assets/images/Q&A.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Movie from "@/assets/images/movie.jpg";
import Apple from "@/assets/images/apple.jpg";

const portfolioProjects = [
  {
    company: " Southwest Academy ",
    year: "2024",
    title: "Question and Answer Hub",
    description:
      "An interactive platform designed to facilitate knowledge-sharing and community-driven discussions for southwest academy students. students can easily ask questions, provide answers, and engage in discussions around various topics. The app features a streamlined user interface with secure sign-in and sign-up options, allowing users to create, vote on, and comment on questions and answers. ",
    results: [
      { title: "Building a community engage in discussions" },
      { title: "students can easily ask questions and provide answers." },
      { title: "Build using Next.js,React,Tailwind and MySql Database " },
    ],
    link: "https://sammythedeveloper.github.io/Q-A/",
    image: QandA,
  },
  {
    company: "Beyond SamVod Tech ",
    year: "2024",
    title: "Money Spending tracker Application",
    description:
      "A personal finance tool designed to help users manage their expenses and gain better control over their financial habits. With an intuitive and user-friendly interface, the app allows users to easily add, categorize, and track their expenses in real-time. Whether it's groceries, bills, transportation, or entertainment, this app helps users monitor their spending habits, set budget goals, and make informed decisions to save money. ",
    results: [
      { title: "Track personal expenses" },
      { title: "Categorize and list expenses" },
      { title: "Boost money saving & spending by 80%" },
    ],
    link: "https://sammythedeveloper.github.io/moneytracking/",
    image: Finance,
  },
  {
    company: "EvangadiTech",
    year: "2023",
    title: "Amazon Shopping",
    description:
      "A fully functional e-commerce platform inspired by the world-renowned Amazon marketplace. Built with modern web technologies, this clone replicates many of the core features of Amazon, providing users with a seamless shopping experience. ",
    results: [
      { title: "Interactive design" },
      { title: "Secure User Authentication" },
      { title: "Payment Tokenization" },
    ],
    link: "https://sammythedeveloper.github.io/amazonclone-2023/",
    image: Amazon,
  },
  {
    company: "Netflex",
    year: "2023",
    title: "Movie ",
    description: "Netflex is a dynamic platform where users can explore, review, and rate a wide array of movies. With an intuitive and user-friendly interface, users can easily browse through movie listings, read detailed reviews, and share their own opinions. Whether you're a casual viewer or a dedicated cinephile, Netflex provides a space for movie enthusiasts to engage, discuss, and rate films.",
    results: [
      { title: "Built with React and Tailwind CSS" },
      { title: "Fetch data (TMDb) API" },
      { title: "Post requests to review a movie" },
    ],
    link: "https://sammythedeveloper.github.io/netflix/", // This can be a placeholder or a link when ready
    image: Movie,
  },
  {
    company: "Apple Website",
    year: "2022",
    title: "Officail Apple website",
    description: "A platform where users can review and rate movies.",
    results: [
      { title: "Built with React,Html and Css" },
      { title: "just a responsive offical apple website demo" },
    ],
    link: "https://sammythedeveloper.github.io/Apple_website_clone/", // This can be a placeholder or a link when ready
    image: Apple,
  },
];
interface SectionProps {
  id: string;
}

export const ProjectsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section className="pb-16 lg:py-24" id={id}>
      <div className="container">
        <SectionHeader
          eyebrows="Real-world Results"
          title="Featured Projects"
          description="See how I transform concepts into engaging digital experiences."
        />
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent"></p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center m-6"></h2>
        <p className=" text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto "></p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
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
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span> {/* Updated text */}
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
